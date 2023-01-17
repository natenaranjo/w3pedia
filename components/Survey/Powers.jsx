import useFormContext from "@/hooks/useFormContext";

const Powers = () => {

    const { data, handleChange } = useFormContext();

    const content = (
        <>
            <div className='grid-col-2'>
                <div className='flex-auto'>
                    <input
                        type='checkbox'
                        id='powers-creator'
                        name='creator'
                        checked={data.powers}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex-auto'>
                    <input
                        type='checkbox'
                        id='powers-builder'
                        name='builder'
                        checked={data.powers}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex-auto'>
                    <input
                        type='checkbox'
                        id='powers-advisor'
                        name='advisor'
                        checked={data.powers}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex-auto'>
                    <input
                        type='checkbox'
                        id='powers-founder'
                        name='founder'
                        checked={data.powers}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}