"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Expression_1 = require("../Abstract/Expression");
const Environment_1 = __importDefault(require("../TableSymbol/Environment"));
const Return_1 = require("../TableSymbol/Return");
class CallFunc extends Expression_1.Expression {
    constructor(id, params, line, column) {
        super(line, column);
        this.id = id;
        this.params = params;
        this.line = line;
        this.column = column;
    }
    execute(environment) {
        try {
            let func = environment.getFunc(this.id);
            if (func != null) {
                let newEnv = new Environment_1.default(environment.getGloval());
                var j = 0;
                for (let i of this.params) {
                    let value = i.execute(environment);
                    newEnv.setVar(func.getParams()[j++].getIdParam(), value.getValue(), value.getType());
                }
                let ret = func.getInstructions().execute(newEnv);
                if (ret != null) {
                    if (ret["type"] == Return_1.Type.RETURN)
                        return ret["value"];
                    else {
                        return ret;
                    }
                }
            }
        }
        catch (error) {
            console.log("Error al llamar ala funcion");
        }
    }
}
exports.default = CallFunc;
