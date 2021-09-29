/*Definicion Lexiva*/
%lex

%options case-insensitive

%%

"//".*        %{yytext = yytext.substr(1,yyleng-2); return 'COMENTARIOL'; %}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] %{yytext = yytext.substr(1,yyleng-2); return 'COMENTARIOMULTI'; %} 

/*palabras reservadas*/
"int"        return 'TINT';
"string"     return 'TSTRING';
"double"     return 'TDOUBLE';

"writeline"  return 'RWRITELINE';

/*simbolos*/
";"             return 'PTCOMA';
":"             return 'DOSPUNTOS';
","             return 'COMA';
"."             return 'PUNTO';
"?"             return 'INTERROGACION';
//ARITMETICOS
"+"          return 'MAS';
"-"         return 'MENOS';
"*"         return 'MULTIPLICAR';
"/"         return 'DIVIDIR';   
"^"         return 'POTENCIA';
"%"         return 'MODULO';
//AGRUPACION
"("             return 'PARIZQ';
")"             return 'PARDER';
"["             return 'CORIZQ';
"]"             return 'CORDER';
"{"             return 'LLAIZQ';
"}"             return 'LLADER';
//RELACIONALES
"<"     return 'MENOR';
">"     return 'MAYOR';
"="     return 'IGUAL';
"!"     return 'NOT';
//LOGICOS
"||"     return 'OR';
"&&"     return 'AND';

/* Espacios en blanco */
[ \r\t]+    {}
\n+          {}

/*PATRONES*/
\"[^\"]*\"      {yytext = yytext.substr(1,yyleng-2); return 'CADENA';}
\'[^\"]?\'      {yytext = yytext.substr(1,yyleng-2); return 'CARACTER';}
[0-9]+"."[0-9]+\b    return 'DECIMAL';
[0-9]+\b                return 'ENTERO';
"true"|"false"        return 'BOOLEANO';
[a-zA-Z]([a-zA-Z0-9_])* return 'IDENTIFICADOR';

<<EOF>>                 return 'EOF';

.                       {console.log(yytext);}
/lex


/**Analizador sintactico*/
%{
    /** Type */
    const Return = require('./TableSymbol/Return')
    /*Enums**/

    const WriteLine = require('./Instrucciones/WriteLine');

    /*PRIMITIVAS*/
    const Primitive = require('./Expression/Primitive')

    /*Aritmeticas**/
    const Aritmethic = require('./Expression/Aritmethic')
%}

//PRECEDENCIA
%left 'INTERROGACION'
%left 'OR'
%left 'AND'
%left 'IGUAL' 'NOT'
%left 'MAYOR' 'MENOR'
%left 'MAS' 'MENOS'
%left 'MULTIPLICAR' 'DIVIDIR' 'MODULO'
%left 'POTENCIA'
%right 'NEGATIVO' 'NEGACION'


/**Inicio de la gramatica*/
%start inicio

%% // CONSTRUCCION DE GRAMATICA

inicio
    : instructions EOF {return $1;}
;

instructions 
    : instructions instruction {$1.push($2);}
    | instruction              {$$ = [$1];}
;

instruction 
    : print PTCOMA { $$ = $1;}
;

print
    : RWRITELINE PARIZQ expression PARDER { $$ = new WriteLine.default($3,@1.first_line,@1.first_column); }
;

expression 
    : expression MAS expression { $$ = new Aritmethic.default($1, $3 , Aritmethic.AritmethicOption.PLUS,@1.first_line,@1.first_column)}
    | expression MENOS expression { $$ = new Aritmethic.default($1, $3 , Aritmethic.AritmethicOption.MINUS,@1.first_line,@1.first_column)}
    | expression MULTIPLICAR expression { $$ = new Aritmethic.default($1, $3 , Aritmethic.AritmethicOption.TIMES,@1.first_line,@1.first_column)}
    | expression DIVIDIR expression { $$ = new Aritmethic.default($1, $3 , Aritmethic.AritmethicOption.DIV,@1.first_line,@1.first_column)}
    | expression MODULO expression { $$ = new Aritmethic.default($1, $3 , Aritmethic.AritmethicOption.MOD,@1.first_line,@1.first_column)}
    | primitexp { $$ = $1}
;

primitexp
    : ENTERO { $$ = new Primitive.default($1 , Return.Type.ENTERO, @1.first_line,@1.first_column); }
    | DECIMAL { $$ = new Primitive.default($1 , Return.Type.DOUBLE, @1.first_line,@1.first_column); }
    | STRING { $$ = new Primitive.default($1 , Return.Type.STRING, @1.first_line,@1.first_column); }
;

