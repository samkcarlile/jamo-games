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
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var ink_1 = require("ink");
var Counter = function () {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    react_1.useEffect(function () {
        var timer = setInterval(function () {
            setCounter(function (previousCounter) { return previousCounter + 1; });
        }, 100);
        return function () {
            clearInterval(timer);
        };
    }, []);
    return react_1["default"].createElement(ink_1.Text, { italic: true, bold: true, backgroundColor: "green", color: "red" },
        counter,
        " tests passed");
};
ink_1.render(react_1["default"].createElement(Counter, null));
