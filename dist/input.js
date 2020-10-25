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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var ink_1 = require("ink");
var ink_big_text_1 = __importDefault(require("ink-big-text"));
var ink_gradient_1 = __importDefault(require("ink-gradient"));
var Board = function () {
    var _a = react_1.useState([
        ['X', 'O', 'O'],
        ['-', 'X', '-'],
        ['-', '-', 'X'],
    ]), board = _a[0], setBoard = _a[1];
    var getColor = function (text) { return ({ '-': 'white', X: 'red', O: 'cyan' }[text]); };
    return (react_1["default"].createElement(ink_1.Box, { display: "flex", alignItems: "center", flexDirection: "column" },
        react_1["default"].createElement(ink_gradient_1["default"], { colors: ['red', 'cyan'] },
            react_1["default"].createElement(ink_big_text_1["default"], { text: "Tic Tac Toe" })),
        react_1["default"].createElement(ink_1.Box, { borderStyle: "doubleSingle", display: "flex", flexDirection: "column", width: 54, marginX: 10 }, board.map(function (row, index) { return (react_1["default"].createElement(ink_1.Box, { key: index, display: "flex", flexDirection: "row" }, row.map(function (value, rowIndex) { return (react_1["default"].createElement(ink_1.Box, { key: rowIndex, width: 18, height: 8, borderStyle: "round", display: "flex", paddingX: 1, paddingY: 1, alignItems: "center", justifyContent: "center" },
            react_1["default"].createElement(ink_big_text_1["default"], { colors: [getColor(value)], text: value, font: 'simple' }))); }))); })),
        react_1["default"].createElement(ink_1.Newline, null)));
};
ink_1.render(react_1["default"].createElement(Board, null));
