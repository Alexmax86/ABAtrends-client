"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./usertable.css");
function UserTable(tableProps) {
    return ((0, jsx_runtime_1.jsxs)("table", { className: "customTable", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: tableProps.headers.map((header, index) => ((0, jsx_runtime_1.jsx)("th", { children: header }, index))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: tableProps.rows.map((rowItem) => ((0, jsx_runtime_1.jsx)("tr", { children: rowItem.tableCells.map((cellItem, index) => ((0, jsx_runtime_1.jsx)("td", { "data-label": tableProps.headers[index], children: !('callBack' in cellItem)
                            ? cellItem.caption
                            : ((0, jsx_runtime_1.jsx)("button", { onClick: cellItem.callBack, children: cellItem.caption })) }, index))) }, rowItem.key))) })] }));
}
exports.default = UserTable;
