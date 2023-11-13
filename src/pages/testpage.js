"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const usertable_1 = __importDefault(require("../components/usertable/usertable"));
function Testpage() {
    const [data, setData] = (0, react_1.useState)([]);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        function getData() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const resp = yield fetch(process.env.REACT_APP_API_URL + '/therapists');
                    const json = yield resp.json();
                    setData(json);
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
        getData();
    }, []);
    function returnTableCells(element) {
        const cells = [
            { caption: element.name },
            { caption: element.surname },
            { caption: element.age.toString() },
            { caption: element.email },
            //Describe button and callback
            { caption: "Edit",
                isButton: true,
                callBack: () => { alert("Callback"); }
            }
        ];
        return cells;
    }
    function returnTablerows() {
        const rows = [];
        data.forEach((element) => {
            rows.push({
                tableCells: returnTableCells(element),
                key: element.id
            });
        });
        return rows;
    }
    const userTableProps = {
        headers: ['Name', 'Surname', 'Age', 'Email', 'Action'],
        rows: returnTablerows()
    };
    return ((0, jsx_runtime_1.jsx)(usertable_1.default, Object.assign({}, userTableProps)));
}
exports.default = Testpage;
