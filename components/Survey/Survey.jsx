import SurveyInputs from './SurveyInputs';
import useFormContext from '@/hooks/useFormContext';

const Survey = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        nextHide,
        submitHide
    } = useFormContext();

    const handlePrev = () => setPage(prev => prev - 1);

    const handleNext = () => setPage(prev => prev + 1);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON>stringify(data))
    }

    const content = (
        <form className='from flex-col' onSubmit={handleSubmit}>

            <header>
                <h2>{title[page]}</h2>

                <div className="button-container">
                    
                    <button type='button' className={`button ${nextHide}`} onClick={handleNext}>Next</button>

                    <button type='submit' className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>

                </div>
            </header>
            
            <p>
                What is Your Primary Role In Your DAO(S)?
            </p>
            
            <p>
                Select Up To 4.
            </p>

            <SurveyInputs />

        </form>
    )


    return (
        <div>
            Enter
        </div>
    );
}

export default Survey;