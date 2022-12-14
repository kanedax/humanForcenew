import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Select = ({ options, name, label}) => {
    return (
     
            <div className="input-field col s4">
                <FastField as="select" name={name}>
                    {
                        options.map(o=>(
                            <option value={o.id} key={o.id}>{o.value}</option>
                        ))
                    }
                </FastField>
                <label>{label}</label>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
};

export default Select;