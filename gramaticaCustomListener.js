import gramaticaListener from "./generated/gramaticaListener.js";

export class gramaticaCustomListener extends gramaticaListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}