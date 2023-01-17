import useFormContext from "@/hooks/useFormContext"

const Powers = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="w-full h-full pb-8 px-8">
            <div className="flex flex-col w-full pb-8">
                <h3 className="uppercase pb-4">what is your superpower ?</h3>
                <p className="text-lg text-neutral-300">What is Your Primary Role In Your DAO(S)?</p>
                <p className="text-lg text-neutral-300">Select Up To 4.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <label>
                    <div className='h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white'>
                            <input
                                type='checkbox'
                                id='powerCreator'
                                name='powerCreator'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Creator</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">NFT Artist, UX Design, Content Creator, Writer</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='powerBuilder'
                                name='powerBuilder'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Builder</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Full Stack Developer, Game Developer, Web Developer, Application Developer</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='powerAdvisor'
                                name='powerAdvisor'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Advisor</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Financial Advisor, Security Expert, Manager, Coordinator</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='powerFounder'
                                name='powerFounder'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Founder</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">DAO Founder, DApp Founder, Web 3 Entrepeneur</p>
                    </div>
                </label>
            </div>
        </div>
    )

    return content
}
export default Powers