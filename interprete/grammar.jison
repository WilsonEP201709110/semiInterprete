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
"void"       return 'FVOID';

"return"     return 'FRETURN';
"if"         return 'CIF';
"else"       return 'CELSE';

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
    const Bloc = require('./Instrucciones/Bloc');

    /*PRIMITIVAS*/
    const Primitive = require('./Expression/Primitive')

    /*Aritmeticas**/
    const Aritmethic = require('./Expression/Aritmethic')
    const Relational = require('./Expression/Relational')

    /*DEclaracion*/
    const Declaracion = require('./Instrucciones/Variables/Declaracion')

    /*Acceso a variable**/
    const Access = require('./Expression/Access')

    /*declaracion de funciones**/
    const Function = require('./Instrucciones/Function/Function')
    const Param = require('./Instrucciones/Function/Param')
    const ReturnF = require('./Instrucciones/Function/ReturnF')

    /*llamada de funcion**/
    const CallFunc = require('./Expression/CallFunc')

    /*condicional if y else**/
    const If = require('./Instrucciones/Condicional/If')
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
    : print PTCOMA { $$ = $1; }
    | declaration PTCOMA { $$ = $1; }
    | declarationFunc PTCOMA { $$ = $1; }
    | returnFunc PTCOMA { $$ = $1; } 
    | callFunc PTCOMA { $$ = $1; }
    | ifIns { $$ = $1; }
;

bloc 
    : instructions { $$ = new Bloc.default($1,@1.first_line,@1.first_column);}
;

declaration
    : TINT IDENTIFICADOR IGUAL expression { $$ = new Declaracion.default($2,$4,Return.Type.ENTERO,@1.first_line,@1.first_column); }
;

declarationFunc
    : FVOID IDENTIFICADOR PARIZQ  PARDER LLAIZQ bloc LLADER { $$ = new Function.default($2,[],$6,@1.first_line,@1.first_column); }
    | FVOID IDENTIFICADOR PARIZQ declarationParams PARDER LLAIZQ bloc LLADER { $$ = new Function.default($2,$4,$7,@1.first_line,@1.first_column); }
    | TINT IDENTIFICADOR PARIZQ declarationParams PARDER LLAIZQ bloc LLADER { $$ = new Function.default($2,$4,$7,@1.first_line,@1.first_column); }
;

declarationParams
    : declarationParams COMA IDENTIFICADOR { $1.push(new Param.default($3,@1.first_line,@1.first_column)); }
    | IDENTIFICADOR { $$ = [new Param.default($1, @1.first_line,@1.first_column)]; }
;

returnFunc
    : FRETURN expression { $$ = new ReturnF.default($2, @1.first_line,@1.first_column);}
    | FRETURN  { $$ = new ReturnF.default(null, @1.first_line,@1.first_column);}    
;

callFunc
    : IDENTIFICADOR PARIZQ PARDER { $$ = new CallFunc.default($1,[], @1.first_line,@1.first_column); }
    | IDENTIFICADOR PARIZQ listExpressions PARDER { $$ = new CallFunc.default($1,$3, @1.first_line,@1.first_column); }
;

listExpressions
    : listExpressions COMA expression { /*$$ = $1; $$.push($3);*/ $1.push($3);  }
    | expression { $$ = [$1]; /*console.log($1);*/}
;

ifIns
    : CIF PARIZQ expression PARDER LLAIZQ bloc LLADER { $$ = new If.default($3,$6,@1.first_line,@1.first_column); }
    | CIF PARIZQ expression PARDER LLAIZQ bloc LLADER CELSE LLAIZQ bloc LLADER { $$ = new If.default($3,$6,@1.first_line,@1.first_column,$10); }
    | CIF PARIZQ expression PARDER LLAIZQ bloc LLADER elseIfList { $$ = new If.default($3,$6,@1.first_line,@1.first_column,$10); }
;

elseIfList
    : CELSE CIF PARIZQ expression PARDER LLAIZQ bloc LLADER { $$ = new If.default($4,$7,@1.first_line,@1.first_column); }
    | CELSE CIF PARIZQ expression PARDER LLAIZQ bloc LLADER CELSE LLAIZQ bloc LLADER { $$ = new If.default($4,$7,@1.first_line,@1.first_column,$11); }
    | CELSE IF PARIZQ expression PARDER LLAIZQ bloc LLADER elseIfList { $$ = new If.default($4,$7,@1.first_line,@1.first_column,$11); }
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
    | expression MENOR expression { $$ = new Relational.default($1, $3 , Relational.RelationalOption.MENOR,@1.first_line,@1.first_column)}
    | expression MAYOR expression { $$ = new Relational.default($1, $3 , Relational.RelationalOption.MAYOR,@1.first_line,@1.first_column)}
    | expression MAYOR IGUAL expression { $$ = new Relational.default($1, $4 , Relational.RelationalOption.MAYORIGUAL,@1.first_line,@1.first_column)}
    | expression MENOR IGUAL expression { $$ = new Relational.default($1, $4 , Relational.RelationalOption.MENORIGUAL,@1.first_line,@1.first_column)}
    | expression IGUAL IGUAL expression { $$ = new Relational.default($1, $4 , Relational.RelationalOption.IGUAL,@1.first_line,@1.first_column)}
    | primitexp { $$ = $1}
;

primitexp
    : ENTERO { $$ = new Primitive.default($1 , Return.Type.ENTERO, @1.first_line,@1.first_column); }
    | DECIMAL { $$ = new Primitive.default($1 , Return.Type.DOUBLE, @1.first_line,@1.first_column); }
    | STRING { $$ = new Primitive.default($1 , Return.Type.STRING, @1.first_line,@1.first_column); }
    | IDENTIFICADOR { $$ = new Access.default($1);}
    | callFunc { $$ = $1; }
;

