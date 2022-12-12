import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Select = ({ option1, option2, option3, name, label}) => {
    return (
     
            <div className="input-field col s4">
                <FastField as="select" name={name}>
                    <option value="None" >{option1}</option>
                    <option value="Male">{option2}</option>
                    <option value="Female">{option3}</option>
                </FastField>
                <label>{label}</label>

            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
};

export default Select;