import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Select2 = ({ option1, option2, option3, option4, option5, option6, option7, name, label}) => {
    return (
        <div >
            <div className="input-field col s4">
                <FastField as="select" name={name}>
                    <option value="None" >{option1}</option>
                    <option value="DiplomaDegree">{option2}</option>
                    <option value="AssociateDegree">{option3}</option>
                    <option value="BachelorsDegree">{option4}</option>
                    <option value="MastersDegree">{option5}</option>
                    <option value="PHdDegree">{option6}</option>
                    <option value="PostPHdDegree ">{option7}</option>
                </FastField>
                <label>{label}</label>
            </div>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
};

export default Select2;