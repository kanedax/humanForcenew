import Checkbox from "./Checkbox"
import Input from "./Input"
import Input1 from "./Input1"
import Select from "./Select"
import Select2 from "./Select2"
import Select3 from "./Select3"
import Switch from "./Switch"


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
        case 'select2':
            return <Select2 {...props} />
        case 'select3':
            return <Select3 {...props} />
        case 'switch':
            return <Switch {...props} />
        default:
            return null
    }
}

export default FormikControl;