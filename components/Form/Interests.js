import useFormContext from "@/hooks/useFormContext"

const Interests = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="w-full h-full pb-8 px-8">
            <div className="flex flex-col w-full pb-8">
                <h3 className="uppercase pb-4">what recourses interest you?</h3>
                <p className="text-lg text-neutral-300">What Tools Will Help You Achieve Your Goal?</p>
                <p className="text-lg text-neutral-300">Select Up To Four.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <label>
                    <div className='h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white'>
                            <input
                                type='checkbox'
                                id='interestSoftware'
                                name='interestSoftware'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Software</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Wallets, Smart Contracts, Developer Tools, Marketplaces, Storage</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='interestJobSearch'
                                name='interestJobSearch'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Job Search</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Job Boards, Recruiting Platforms, On Chain Portfolios</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='interestEducation'
                                name='interestEducation'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Education</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Online Courses, Certificate Programs, Webinars</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='interestNews'
                                name='interestNews'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">News</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Analytics Dashboards, Articles, Podcasts, Blogs, Current Event Updates</p>
                    </div>
                </label>
            </div>
        </div>
    )

    return content
}
export default Interests