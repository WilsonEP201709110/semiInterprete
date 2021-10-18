/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,14],$V2=[1,12],$V3=[1,13],$V4=[1,15],$V5=[1,10],$V6=[5,15,16,19,23,26,28,32],$V7=[1,31],$V8=[1,28],$V9=[1,29],$Va=[1,30],$Vb=[1,33],$Vc=[1,46],$Vd=[1,39],$Ve=[1,40],$Vf=[1,41],$Vg=[1,42],$Vh=[1,43],$Vi=[1,44],$Vj=[1,45],$Vk=[8,17,21,25,33,34,35,36,37,38,39],$Vl=[1,54],$Vm=[21,25],$Vn=[1,71],$Vo=[8,17,21,25,33,34,38,39],$Vp=[8,17,21,25,38,39],$Vq=[1,94],$Vr=[1,95];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instructions":4,"EOF":5,"instruction":6,"print":7,"PTCOMA":8,"declaration":9,"declarationFunc":10,"returnFunc":11,"callFunc":12,"ifIns":13,"bloc":14,"TINT":15,"IDENTIFICADOR":16,"IGUAL":17,"expression":18,"FVOID":19,"PARIZQ":20,"PARDER":21,"LLAIZQ":22,"LLADER":23,"declarationParams":24,"COMA":25,"FRETURN":26,"listExpressions":27,"CIF":28,"CELSE":29,"elseIfList":30,"IF":31,"RWRITELINE":32,"MAS":33,"MENOS":34,"MULTIPLICAR":35,"DIVIDIR":36,"MODULO":37,"MENOR":38,"MAYOR":39,"primitexp":40,"ENTERO":41,"DECIMAL":42,"STRING":43,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"PTCOMA",15:"TINT",16:"IDENTIFICADOR",17:"IGUAL",19:"FVOID",20:"PARIZQ",21:"PARDER",22:"LLAIZQ",23:"LLADER",25:"COMA",26:"FRETURN",28:"CIF",29:"CELSE",31:"IF",32:"RWRITELINE",33:"MAS",34:"MENOS",35:"MULTIPLICAR",36:"DIVIDIR",37:"MODULO",38:"MENOR",39:"MAYOR",41:"ENTERO",42:"DECIMAL",43:"STRING"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,2],[6,2],[6,2],[6,1],[14,1],[9,4],[10,7],[10,8],[10,8],[24,3],[24,1],[11,2],[11,1],[12,3],[12,4],[27,3],[27,1],[13,7],[13,11],[13,8],[30,8],[30,12],[30,9],[7,4],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,4],[18,4],[18,4],[18,1],[40,1],[40,1],[40,1],[40,1],[40,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
$$[$0-1].push($$[$0]);
break;
case 3:
this.$ = [$$[$0]];
break;
case 4: case 5: case 6: case 7: case 8:
 this.$ = $$[$0-1]; 
break;
case 9: case 45:
 this.$ = $$[$0]; 
break;
case 10:
 this.$ = new Bloc.default($$[$0],_$[$0].first_line,_$[$0].first_column);
break;
case 11:
 this.$ = new Declaracion.default($$[$0-2],$$[$0],Return.Type.ENTERO,_$[$0-3].first_line,_$[$0-3].first_column); 
break;
case 12:
 this.$ = new Function.default($$[$0-5],[],$$[$0-1],_$[$0-6].first_line,_$[$0-6].first_column); 
break;
case 13: case 14:
 this.$ = new Function.default($$[$0-6],$$[$0-4],$$[$0-1],_$[$0-7].first_line,_$[$0-7].first_column); 
break;
case 15:
 $$[$0-2].push(new Param.default($$[$0],_$[$0-2].first_line,_$[$0-2].first_column)); 
break;
case 16:
 this.$ = [new Param.default($$[$0], _$[$0].first_line,_$[$0].first_column)]; 
break;
case 17:
 this.$ = new ReturnF.default($$[$0], _$[$0-1].first_line,_$[$0-1].first_column);
break;
case 18:
 this.$ = new ReturnF.default(null, _$[$0].first_line,_$[$0].first_column);
break;
case 19:
 this.$ = new CallFunc.default($$[$0-2],[], _$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 20:
 this.$ = new CallFunc.default($$[$0-3],$$[$0-1], _$[$0-3].first_line,_$[$0-3].first_column); 
break;
case 21:
 /*this.$ = $$[$0-2]; this.$.push($$[$0]);*/ $$[$0-2].push($$[$0]);  
break;
case 22:
 this.$ = [$$[$0]]; /*console.log($$[$0]);*/
break;
case 23:
 this.$ = new If.default($$[$0-4],$$[$0-1],_$[$0-6].first_line,_$[$0-6].first_column); 
break;
case 24:
 this.$ = new If.default($$[$0-8],$$[$0-5],_$[$0-10].first_line,_$[$0-10].first_column,$$[$0-1]); 
break;
case 25:
 this.$ = new If.default($$[$0-5],$$[$0-2],_$[$0-7].first_line,_$[$0-7].first_column,$$[$02]); 
break;
case 26:
 this.$ = new If.default($$[$0-4],$$[$0-1],_$[$0-7].first_line,_$[$0-7].first_column); 
break;
case 27:
 this.$ = new If.default($$[$0-8],$$[$0-5],_$[$0-11].first_line,_$[$0-11].first_column,$$[$0-1]); 
break;
case 28:
 this.$ = new If.default($$[$0-5],$$[$0-2],_$[$0-8].first_line,_$[$0-8].first_column,$$[$02]); 
break;
case 29:
 this.$ = new WriteLine.default($$[$0-1],_$[$0-3].first_line,_$[$0-3].first_column); 
break;
case 30:
 this.$ = new Aritmethic.default($$[$0-2], $$[$0] , Aritmethic.AritmethicOption.PLUS,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 31:
 this.$ = new Aritmethic.default($$[$0-2], $$[$0] , Aritmethic.AritmethicOption.MINUS,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 32:
 this.$ = new Aritmethic.default($$[$0-2], $$[$0] , Aritmethic.AritmethicOption.TIMES,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 33:
 this.$ = new Aritmethic.default($$[$0-2], $$[$0] , Aritmethic.AritmethicOption.DIV,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 34:
 this.$ = new Aritmethic.default($$[$0-2], $$[$0] , Aritmethic.AritmethicOption.MOD,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 35:
 this.$ = new Relational.default($$[$0-2], $$[$0] , Relational.RelationalOption.MENOR,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 36:
 this.$ = new Relational.default($$[$0-2], $$[$0] , Relational.RelationalOption.MAYOR,_$[$0-2].first_line,_$[$0-2].first_column)
break;
case 37:
 this.$ = new Relational.default($$[$0-3], $$[$0] , Relational.RelationalOption.MAYORIGUAL,_$[$0-3].first_line,_$[$0-3].first_column)
break;
case 38:
 this.$ = new Relational.default($$[$0-3], $$[$0] , Relational.RelationalOption.MENORIGUAL,_$[$0-3].first_line,_$[$0-3].first_column)
break;
case 39:
 this.$ = new Relational.default($$[$0-3], $$[$0] , Relational.RelationalOption.IGUAL,_$[$0-3].first_line,_$[$0-3].first_column)
break;
case 40:
 this.$ = $$[$0]
break;
case 41:
 this.$ = new Primitive.default($$[$0] , Return.Type.ENTERO, _$[$0].first_line,_$[$0].first_column); 
break;
case 42:
 this.$ = new Primitive.default($$[$0] , Return.Type.DOUBLE, _$[$0].first_line,_$[$0].first_column); 
break;
case 43:
 this.$ = new Primitive.default($$[$0] , Return.Type.STRING, _$[$0].first_line,_$[$0].first_column); 
break;
case 44:
 this.$ = new Access.default($$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{1:[3]},{5:[1,16],6:17,7:4,9:5,10:6,11:7,12:8,13:9,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},o($V6,[2,3]),{8:[1,18]},{8:[1,19]},{8:[1,20]},{8:[1,21]},{8:[1,22]},o($V6,[2,9]),{20:[1,23]},{16:[1,24]},{16:[1,25]},{8:[2,18],12:32,16:$V7,18:26,40:27,41:$V8,42:$V9,43:$Va},{20:$Vb},{20:[1,34]},{1:[2,1]},o($V6,[2,2]),o($V6,[2,4]),o($V6,[2,5]),o($V6,[2,6]),o($V6,[2,7]),o($V6,[2,8]),{12:32,16:$V7,18:35,40:27,41:$V8,42:$V9,43:$Va},{17:[1,36],20:[1,37]},{20:[1,38]},{8:[2,17],17:$Vc,33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj},o($Vk,[2,40]),o($Vk,[2,41]),o($Vk,[2,42]),o($Vk,[2,43]),o($Vk,[2,44],{20:$Vb}),o($Vk,[2,45]),{12:32,16:$V7,18:49,21:[1,47],27:48,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,18:50,40:27,41:$V8,42:$V9,43:$Va},{17:$Vc,21:[1,51],33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj},{12:32,16:$V7,18:52,40:27,41:$V8,42:$V9,43:$Va},{16:$Vl,24:53},{16:$Vl,21:[1,55],24:56},{12:32,16:$V7,18:57,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,18:58,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,18:59,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,18:60,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,18:61,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,17:[1,63],18:62,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,17:[1,65],18:64,40:27,41:$V8,42:$V9,43:$Va},{17:[1,66]},o($Vk,[2,19]),{21:[1,67],25:[1,68]},o($Vm,[2,22],{17:$Vc,33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj}),{17:$Vc,21:[1,69],33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj},{8:[2,29]},{8:[2,11],17:$Vc,33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj},{21:[1,70],25:$Vn},o($Vm,[2,16]),{22:[1,72]},{21:[1,73],25:$Vn},o($Vo,[2,30],{35:$Vf,36:$Vg,37:$Vh}),o($Vo,[2,31],{35:$Vf,36:$Vg,37:$Vh}),o($Vk,[2,32]),o($Vk,[2,33]),o($Vk,[2,34]),o($Vp,[2,35],{33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh}),{12:32,16:$V7,18:74,40:27,41:$V8,42:$V9,43:$Va},o($Vp,[2,36],{33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh}),{12:32,16:$V7,18:75,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,18:76,40:27,41:$V8,42:$V9,43:$Va},o($Vk,[2,20]),{12:32,16:$V7,18:77,40:27,41:$V8,42:$V9,43:$Va},{22:[1,78]},{22:[1,79]},{16:[1,80]},{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:81,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{22:[1,83]},o($Vp,[2,38],{33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh}),o($Vp,[2,37],{33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh}),o([8,17,21,25],[2,39],{33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj}),o($Vm,[2,21],{17:$Vc,33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj}),{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:84,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:85,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},o($Vm,[2,15]),{23:[1,86]},{6:17,7:4,9:5,10:6,11:7,12:8,13:9,15:$V0,16:$V1,19:$V2,23:[2,10],26:$V3,28:$V4,32:$V5},{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:87,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{23:[1,88]},{23:[1,89]},{8:[2,12]},{23:[1,90]},o($V6,[2,23],{30:92,29:[1,91]}),{8:[2,14]},{8:[2,13]},{22:[1,93],28:$Vq,31:$Vr},o($V6,[2,25]),{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:96,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{20:[1,97]},{20:[1,98]},{23:[1,99]},{12:32,16:$V7,18:100,40:27,41:$V8,42:$V9,43:$Va},{12:32,16:$V7,18:101,40:27,41:$V8,42:$V9,43:$Va},o($V6,[2,24]),{17:$Vc,21:[1,102],33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj},{17:$Vc,21:[1,103],33:$Vd,34:$Ve,35:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj},{22:[1,104]},{22:[1,105]},{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:106,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:107,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{23:[1,108]},{23:[1,109]},o($V6,[2,26],{29:[1,110]}),{29:[1,112],30:111},{22:[1,113]},o($V6,[2,28]),{28:$Vq,31:$Vr},{4:82,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:114,15:$V0,16:$V1,19:$V2,26:$V3,28:$V4,32:$V5},{23:[1,115]},o($V6,[2,27])],
defaultActions: {16:[2,1],51:[2,29],86:[2,12],89:[2,14],90:[2,13]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 'COMENTARIOL'; 
break;
case 1:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 'COMENTARIOMULTI'; 
break;
case 2:return 15;
break;
case 3:return 'TSTRING';
break;
case 4:return 'TDOUBLE';
break;
case 5:return 32;
break;
case 6:return 19;
break;
case 7:return 26;
break;
case 8:return 28;
break;
case 9:return 29;
break;
case 10:return 8;
break;
case 11:return 'DOSPUNTOS';
break;
case 12:return 25;
break;
case 13:return 'PUNTO';
break;
case 14:return 'INTERROGACION';
break;
case 15:return 33;
break;
case 16:return 34;
break;
case 17:return 35;
break;
case 18:return 36;   
break;
case 19:return 'POTENCIA';
break;
case 20:return 37;
break;
case 21:return 20;
break;
case 22:return 21;
break;
case 23:return 'CORIZQ';
break;
case 24:return 'CORDER';
break;
case 25:return 22;
break;
case 26:return 23;
break;
case 27:return 38;
break;
case 28:return 39;
break;
case 29:return 17;
break;
case 30:return 'NOT';
break;
case 31:return 'OR';
break;
case 32:return 'AND';
break;
case 33:
break;
case 34:
break;
case 35:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 'CADENA';
break;
case 36:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 'CARACTER';
break;
case 37:return 42;
break;
case 38:return 41;
break;
case 39:return 'BOOLEANO';
break;
case 40:return 16;
break;
case 41:return 5;
break;
case 42:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:writeline\b)/i,/^(?:void\b)/i,/^(?:return\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:;)/i,/^(?::)/i,/^(?:,)/i,/^(?:\.)/i,/^(?:\?)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\^)/i,/^(?:%)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:[ \r\t]+)/i,/^(?:\n+)/i,/^(?:"[^\"]*")/i,/^(?:'[^\"]?')/i,/^(?:[0-9]+\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:true|false\b)/i,/^(?:[a-zA-Z]([a-zA-Z0-9_])*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}