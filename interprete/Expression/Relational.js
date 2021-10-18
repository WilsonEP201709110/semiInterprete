"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationalOption = void 0;
const Expression_1 = require("../Abstract/Expression");
const Return_1 = __importStar(require("../TableSymbol/Return"));
class Relational extends Expression_1.Expression {
    // 344 + 343
    constructor(left, right, operacion, line, column) {
        super(line, column);
        this.left = left;
        this.right = right;
        this.ope = operacion;
        this.line = line;
        this.column = column;
    }
    execute(environment) {
        var izquierdo = this.left.execute(environment);
        var derecho = this.right.execute(environment);
        switch (this.ope) {
            case RelationalOption.MAYOR:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                break;
            case RelationalOption.MAYORIGUAL:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                break;
            case RelationalOption.MENOR:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                break;
            case RelationalOption.MENORIGUAL:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                break;
            case RelationalOption.IGUAL:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) == Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) == Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) == Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) == Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                break;
            case RelationalOption.DIFERENTE:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) != Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Boolean(Number(izquierdo.getValue()) != Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) != Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Boolean(Number(izquierdo.getValue()) != Number(derecho.getValue()));
                    return new Return_1.default(result, Return_1.Type.BOOLEAN);
                }
                break;
        }
        return new Return_1.default(false, Return_1.Type.BOOLEAN);
    }
}
exports.default = Relational;
var RelationalOption;
(function (RelationalOption) {
    RelationalOption[RelationalOption["MAYOR"] = 0] = "MAYOR";
    RelationalOption[RelationalOption["MENOR"] = 1] = "MENOR";
    RelationalOption[RelationalOption["MAYORIGUAL"] = 2] = "MAYORIGUAL";
    RelationalOption[RelationalOption["MENORIGUAL"] = 3] = "MENORIGUAL";
    RelationalOption[RelationalOption["IGUAL"] = 4] = "IGUAL";
    RelationalOption[RelationalOption["DIFERENTE"] = 5] = "DIFERENTE";
})(RelationalOption = exports.RelationalOption || (exports.RelationalOption = {}));
