import DatePickerNew from "../DatePickerNew"
import Checkbox from "./Checkbox"
import File from "./File"
import Input from "./Input"
import Input1 from "./Input1"
import Select from "./Select"
import Switch from "./Switch"
import TextArea from "./TextArea"


const FormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props} />
        case 'input1':
            return <Input1 {...props} />
        case 'Checkbox':
            return <Checkbox {...props} />
        case 'select':
            return <Select {...props} />
        case 'switch':
            return <Switch {...props} />
        case 'datepicker':
            return <DatePickerNew {...props} />
        case 'file':
            return <File {...props} />
        case 'textarea':
            return <TextArea {...props} />
        default:
            return null
    }
}

export default FormikControl;