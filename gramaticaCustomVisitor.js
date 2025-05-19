import gramaticaVisitor from './generated/gramaticaVisitor.js';

export class gramaticaCustomVisitor extends gramaticaVisitor {
    constructor() {
        super();
        this.variables = {}; // Para almacenar parámetros
        this.functions = {}; // Para almacenar definiciones de funciones
    }

    visitProgram(ctx) {
        for (let child of ctx.children) {
            this.visit(child);
        }
    }

    visitFunctionDeclaration(ctx) {
        const name = ctx.IDENTIFIER().getText();
        const params = ctx.parameterList()
            ? ctx.parameterList().IDENTIFIER().map(id => id.getText())
            : [];
        const body = ctx.functionBody();

        this.functions[name] = { params, body };
        return null;
    }

    visitFunctionCallStatement(ctx) {
        return this.visit(ctx.functionCall());
    }

    visitConsoleLogStatement(ctx) {
        const exprs = ctx.expression();
        const values = exprs.map(expr => this.visit(expr));
        console.log(...values);
        return null;
    }

    visitExpressionStatement(ctx) {
        return this.visit(ctx.expression());
    }

    visitExpression(ctx) {
        if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }

        let result = this.visit(ctx.term(0));
        for (let i = 1; i < ctx.term().length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const nextValue = this.visit(ctx.term(i));
            if (operator === '+') result += nextValue;
            else if (operator === '-') result -= nextValue;
        }
        return result;
    }

    visitTerm(ctx) {
        if (ctx.IDENTIFIER()) {
            const name = ctx.IDENTIFIER().getText();
            return this.variables[name] ?? 0; // Por defecto 0 si no está definido
        } else if (ctx.NUMBER()) {
            return parseInt(ctx.NUMBER().getText());
        } else {
            return this.visit(ctx.expression());
        }
    }

    visitFunctionCall(ctx) {
        const name = ctx.IDENTIFIER().getText();
        const args = ctx.argumentList()
            ? ctx.argumentList().expression().map(expr => this.visit(expr))
            : [];

        if (!(name in this.functions)) {
            throw new Error(`Función no definida: ${name}`);
        }

        const { params, body } = this.functions[name];
        const oldVars = { ...this.variables };

        for (let i = 0; i < params.length; i++) {
            this.variables[params[i]] = args[i];
        }

        const result = this.visit(body);

        this.variables = oldVars;
        return result;
    }

    visitFunctionBody(ctx) {
        let result = null;
        for (let stmt of ctx.statement()) {
            result = this.visit(stmt);
        }
        return result;
    }
}