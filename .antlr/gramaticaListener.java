// Generated from c:/Users/nacho/OneDrive/Desktop/Analizador de 0/gramatica.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link gramaticaParser}.
 */
public interface gramaticaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(gramaticaParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(gramaticaParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(gramaticaParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(gramaticaParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(gramaticaParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(gramaticaParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#bucle}.
	 * @param ctx the parse tree
	 */
	void enterBucle(gramaticaParser.BucleContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#bucle}.
	 * @param ctx the parse tree
	 */
	void exitBucle(gramaticaParser.BucleContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(gramaticaParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(gramaticaParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(gramaticaParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(gramaticaParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(gramaticaParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(gramaticaParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(gramaticaParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(gramaticaParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(gramaticaParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(gramaticaParser.CadenaContext ctx);
}