"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function DateWidget(props) {
    const [selectedDate, setSelectedDate] = (0, react_1.useState)('');
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        props.callBack(event.target.value);
    };
    return ((0, jsx_runtime_1.jsx)("input", { type: "date", value: selectedDate, onChange: handleDateChange, name: props.name }));
}
exports.default = DateWidget;
