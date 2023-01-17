import { createContext, useState, useEffect } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Question 1 of 3',
        1: 'Question 2 of 3',
        2: 'Question 3 of 3'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        powerCreator: false,
        powerBuilder: false,
        powerAdvisor: false,
        powerFounder: false,
        interestSoftware: false,
        interestJobSearch: false,
        interestEducation: false,
        interestNews: false,
        productDApp: false,
        productSoftware: false,
        productEnterprise: false,
        productNFTs: false,
        productMaketplace: false,
        productNews: false
    })

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }

    const {
        powerCreator,
        powerBuilder,
        powerAdvisor,
        powerFounder,
        interestSoftware,
        interestJobSearch,
        interestEducation,
        interestNews,
        productDApp,
        productSoftware,
        productEnterprise,
        productNFTs,
        productMaketplace,
        productNews
    } = data

    const canSubmit = [...Object.values(data)].every(Boolean) && page === Object.keys(title).length - 1

    const nextHide = page === Object.keys(title).length - 1 && "hidden"

    const submitHide = page !== Object.keys(title).length - 1 && "hidden"

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, nextHide, submitHide }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 