import { ErrorMessage, FastField } from "formik"
import FormikError from "./FormikError"


const Input = ({ icon, type, inputClassName, label, id, htmlFor, name }) => {
    return (
        <div className="row">
            <div className="input-field col s12">
                <i className={icon}></i>
                <FastField type={type} id={id} className={inputClassName} name={name} />
                <label htmlFor={htmlFor}>{label}</label>
                <ErrorMessage name={name} component={FormikError} />
            </div>
        </div>
    )
}
export default Input;