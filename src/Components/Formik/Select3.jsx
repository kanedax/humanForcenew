import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Select3 = ({ option1, option2, option3, option4, option5, name, label}) => {
    return (
        <div >
            <div className="input-field col s4">
                <FastField as="select" name={name}>
                    <option value="None" >{option1}</option>
                    <option value="Educatinal">{option2}</option>
                    <option value="Medical">{option3}</option>
                    <option value="Done">{option4}</option>
                    <option value="Exclude ">{option5}</option>
                </FastField>
                <label>{label}</label>
            </div>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
};

export default Select3;