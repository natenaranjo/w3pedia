import Powers from "./Powers"
import Products from "./Products"
import Interests from "./Interests"
import useFormContext from "@/hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Powers />,
        1: <Interests />,
        2: <Products />
    }

    const content = (
        <div className="container-fluid">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs