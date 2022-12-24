import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Select = ({ options, name, label, className}) => {
    return (
     
            <div className="input-field col s4">
                <FastField as="select" name={name} className={className}>
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