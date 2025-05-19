grammar gramatica;

programa
    : instrucciones EOF
    ;

instrucciones
    : instruccion+
    ;

instruccion
    : bucle
    ;

bucle
    : DO LBRACE sentencia RBRACE WHILE LPAREN condicion RPAREN SEMICOLON
    ;

sentencia
    : (salida | terminar)+
    ;

salida
    : PUTS LPAREN cadena RPAREN SEMICOLON
    ;

terminar
    : BREAK SEMICOLON
    ;

condicion
    : CERO
    | UNO
    ;

cadena
    : CADENA
    ;

// Tokens
DO          : 'do' ;
WHILE       : 'while' ;
BREAK       : 'break' ;
PUTS        : 'puts' ;
LPAREN      : '(' ;
RPAREN      : ')' ;
LBRACE      : '{' ;
RBRACE      : '}' ;
SEMICOLON   : ';' ;
CERO        : '0' ;
UNO         : '1' ;
CADENA      : '"' (~["\r\n])* '"' ;
WS          : [ \t\r\n]+ -> skip ;

