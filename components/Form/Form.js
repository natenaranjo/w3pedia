import FormInputs from './FormInputs'
import useFormContext from '@/hooks/useFormContext'

const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        nextHide,
        submitHide
    } = useFormContext()

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }


    const content = (
        <form className="w-full h-full" onSubmit={handleSubmit}>
            <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full md:2-1/2 px-3 md:mb-0'>
                    <header className='px-8 pt-8 '>
                        <h6>{title[page]}</h6>
                    </header>
                </div>
            </div>

            <FormInputs />

            <div className=" m-auto p-8 ">
                <div className='w-full flex flex-col items-center'>
                <button type="button" className={`
                    w-[75%]
                    h-16
                    bg-neutral-200 
                    hover:bg-neutral-100 
                    text-black 
                    font-bold 
                    py-2 
                    px-4 
                    border-b-4 
                    border-neutral-400 
                    hover:border-neutral-400
                    hover:scale-105
                    rounded-full
                    uppercase
                    text-xl
                    md:text-4xl
                    ${nextHide}
                `} onClick={handleNext}>
                    Next Question
                </button>
                <button type="submit" className={`
                    w-[75%]
                    h-16
                    bg-neutral-200 
                    hover:bg-neutral-100 
                    text-black 
                    font-bold 
                    py-2 
                    px-4 
                    border-b-4 
                    border-neutral-400 
                    hover:border-neutral-400
                    hover:scale-105
                    rounded-full
                    uppercase
                    text-xl
                    md:text-4xl
                    ${submitHide}
                `}>
                        Submit
                </button>
                </div>
            </div>

        </form>
    )

    return content
}
export default Form