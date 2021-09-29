"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["ENTERO"] = 0] = "ENTERO";
    Type[Type["STRING"] = 1] = "STRING";
    Type[Type["BOOLEAN"] = 2] = "BOOLEAN";
    Type[Type["DOUBLE"] = 3] = "DOUBLE";
})(Type = exports.Type || (exports.Type = {}));
class Return {
    constructor(value, tipo) {
        this.value = value;
        this.tipo = tipo;
    }
    getValue() {
        return this.value;
    }
    getType() {
        return this.tipo;
    }
}
exports.default = Return;
