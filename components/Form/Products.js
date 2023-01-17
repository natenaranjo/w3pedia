import useFormContext from "@/hooks/useFormContext"

const Products = () => {
    const { data, handleChange } = useFormContext()

    const content = (
        <div className="w-full h-full pb-8 px-8">
            <div className="flex flex-col w-full pb-8">
                <h3 className="uppercase pb-4">What is Your Product?</h3>
                <p className="text-lg text-neutral-300">What Are You Helping To Build?</p>
                <p className="text-lg text-neutral-300">Select Up To Six.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <label>
                    <div className='h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white'>
                            <input
                                type='checkbox'
                                id='productDApp'
                                name='productDApp'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">DApp</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Type 1, Type 2, Type 3, Social Media DApp, Financial DApp</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='productSoftware'
                                name='productSoftware'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Software / Tool</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Wallet, Smart Contract, Security Software, Analytics, Storage</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='productEnterprise'
                                name='productEnterprise'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Enterprise</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Blockchain, DeFi, Insurance</p>
                     </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='productNftGaming'
                                name='productNftGaming'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">NFTs and Gaming</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">NFTs, Games, Metaverse, AI</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='productMarketplace'
                                name='productMarketplace'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">Marketplace</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Marketplaces</p>
                    </div>
                </label>
                <label>
                    <div className="h-full lg:h-56 border-2 border-neutral-400 p-6 rounded-xl group hover:bg-white">
                            <input
                                type='checkbox'
                                id='productNews'
                                name='productNews'
                                className=""
                                onClick={handleChange}
                            />
                            <h3 className="uppercase group-hover:text-black">News</h3>
                            <p className="p-3 text-neutral-300 group-hover:text-black">Podcast, Blog</p>
                    </div>
                </label>
            </div>
        </div>
    )

    return content
}
export default Products;