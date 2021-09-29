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
exports.AritmethicOption = void 0;
const Expression_1 = require("../Abstract/Expression");
const Return_1 = __importStar(require("../TableSymbol/Return"));
class Aritmethic extends Expression_1.Expression {
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
            case AritmethicOption.PLUS:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.ENTERO);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.DOUBLE);
                }
                else if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.DOUBLE);
                }
                else if (izquierdo.getType() == Return_1.Type.DOUBLE && derecho.getType() == Return_1.Type.DOUBLE) {
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.DOUBLE);
                }
                break;
            case AritmethicOption.MINUS:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Number(izquierdo.getValue()) - Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.ENTERO);
                }
                break;
            case AritmethicOption.TIMES:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Number(izquierdo.getValue()) * Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.ENTERO);
                }
                break;
            case AritmethicOption.DIV:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Number(izquierdo.getValue()) / Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.ENTERO);
                }
                break;
            case AritmethicOption.MOD:
                if (izquierdo.getType() == Return_1.Type.ENTERO && derecho.getType() == Return_1.Type.ENTERO) {
                    var result = Number(izquierdo.getValue()) % Number(derecho.getValue());
                    return new Return_1.default(result, Return_1.Type.ENTERO);
                }
                break;
        }
        return new Return_1.default(1, Return_1.Type.ENTERO);
    }
}
exports.default = Aritmethic;
var AritmethicOption;
(function (AritmethicOption) {
    AritmethicOption[AritmethicOption["PLUS"] = 0] = "PLUS";
    AritmethicOption[AritmethicOption["MINUS"] = 1] = "MINUS";
    AritmethicOption[AritmethicOption["TIMES"] = 2] = "TIMES";
    AritmethicOption[AritmethicOption["DIV"] = 3] = "DIV";
    AritmethicOption[AritmethicOption["MOD"] = 4] = "MOD";
    AritmethicOption[AritmethicOption["POW"] = 5] = "POW";
})(AritmethicOption = exports.AritmethicOption || (exports.AritmethicOption = {}));
