import Powers from './Powers';
import Interest from './Interests';
import Products from './Products';
import useFormContext from '@/hooks/useFormContext';

const FormInputs = () => {
    
    const { page } = useFormContext();

    const display = {
        0: <Powers />,
        1: <Interest />,
        2: <Products />
    }

    const content = (
        <div className='form-inputs flex-col'>
            {display[page]}
        </div>
    )

    return content;
};

export default FormInputs;