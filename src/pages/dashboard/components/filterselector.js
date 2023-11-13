"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./filterselector.css");
const react_1 = require("react");
//import Selectorwidget from '../../../components/selectorwidget';
const dateWidget_1 = __importDefault(require("../../../components/dateWidget"));
function Filterselector(props) {
    var _a;
    const [data, setData] = (0, react_1.useState)([]);
    const [patientSelection, setPatientSelection] = (0, react_1.useState)([]);
    const [initialDate, setInitialDate] = (0, react_1.useState)(null);
    const [finalDate, setFinalDate] = (0, react_1.useState)(null);
    const patientList = (_a = props.filtersContent) === null || _a === void 0 ? void 0 : _a.patientsList.map(obj => {
        const { id, name, surname } = obj;
        const displayString = `${name} ${surname}`;
        return { id, displayString };
    });
    const initialDateCallback = (arg) => { setInitialDate(arg); };
    const finalDateCallback = (arg) => { setFinalDate(arg); };
    const patientSelectionCallBack = (arg) => (setPatientSelection(arg));
    /*
    useEffect(() => {
        if (initialDate != null && finalDate != null){
            console.log("useeffect")
            setFilterSelectionData({id: patientSelection, startDate: initialDate, endDate: finalDate})
        }
    }, [patientSelection, initialDate, finalDate])
    */
    return ((0, jsx_runtime_1.jsxs)("div", { className: "filterPanel", children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "initial-date", children: " Initial date:" }), (0, jsx_runtime_1.jsx)(dateWidget_1.default, { callBack: initialDateCallback, name: "initial-date" })] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "final-date", children: " Final date:" }), (0, jsx_runtime_1.jsx)(dateWidget_1.default, { callBack: finalDateCallback, name: "initial-date" })] }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)("label", { htmlFor: "box", children: "Patient:" }) })] }));
}
exports.default = Filterselector;
