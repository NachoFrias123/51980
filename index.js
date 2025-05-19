import gramaticaLexer from "./generated/gramaticaLexer.js";
import gramaticaParser from "./generated/gramaticaParser.js";
import { gramaticaCustomListener } from "./gramaticaCustomListener.js";
import { gramaticaCustomVisitor } from "./gramaticaCustomVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';
import vm from 'vm'; // Para ejecutar código JavaScript de forma segura

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input.txt
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Mostrar tabla de tokens y lexemas en la terminal
    let tempInputStream = CharStreams.fromString(input);
    let tempLexer = new gramaticaLexer(tempInputStream);
    let token = tempLexer.nextToken();
    const tokensTable = [];
    while (token.type !== antlr4.Token.EOF) {
        // Mostrar nombre simbólico o literal del token
        let tokenName = gramaticaLexer.symbolicNames[token.type];
        if (!tokenName) {
            tokenName = gramaticaLexer.literalNames[token.type];
        }
        tokensTable.push({ Token: tokenName, Lexema: token.text });
        token = tempLexer.nextToken();
    }
    console.log("\nTabla de tokens y lexemas:");
    console.table(tokensTable);

    // 1. Análisis léxico y sintáctico

    // Listener personalizado para mostrar línea y mensaje de error
    class CustomErrorListener extends antlr4.error.ErrorListener {
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
        }
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new gramaticaLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new gramaticaParser(tokenStream);

    // Reemplaza los listeners de error por el personalizado
    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());

    let tree = parser.programa();

    // 3. Verificar errores sintácticos
    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");

        // 4. Mostrar árbol de derivación de forma visual en la consola
        function printParseTree(node, parser, indent = "") {
            if (!node) return;
            let text = "";
            if (node.children) {
                // Es una regla
                const ruleName = parser.ruleNames[node.ruleIndex] || "root";
                text = ruleName;
            } else {
                // Es un token
                text = node.getText();
            }
            console.log(indent + text);
            if (node.children) {
                for (const child of node.children) {
                    printParseTree(child, parser, indent + "  ");
                }
            }
        }
        console.log("\nÁrbol de derivación:");
        printParseTree(tree, parser);

        // 5. Interpretación con Visitor
        const visitor = new gramaticaCustomVisitor();
        const resultado = visitor.visit(tree);

        // 6. Ejecutar como código JavaScript (si aplica)
        try {
            console.log("\nResultado de la ejecución como JavaScript:");
            vm.runInNewContext(input, { puts: console.log }, { timeout: 1000 }); // ahora puts está definido
        } catch (e) {
            console.error("Error al ejecutar el código como JavaScript:\n", e.message);
        }
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();