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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiltersContent = void 0;
//Calls API and forms the FiltersContent object that contains list of patients and therapists
function getFiltersContent() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filtersContent = {
                patientsList: yield (yield fetch(process.env.REACT_APP_API_URL + '/getpatients')).json(),
                therapistsList: yield (yield fetch(process.env.REACT_APP_API_URL + '/gettherapists')).json()
            };
            return filtersContent;
        }
        catch (err) {
            let customError;
            customError = { message: 'Unknown Error' };
            console.log(err);
            if (err instanceof Error)
                customError = { message: err.message };
            return customError;
        }
    });
}
exports.getFiltersContent = getFiltersContent;
