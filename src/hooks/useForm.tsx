import React, { useState } from 'react'

const useForm = (initialValue) => {
    const [formValues, setFormValues] = useState(initialValue);

    const handleOnTextChange = (field: string, value: string) => {
        setFormValues({
            ...formValues,
            [field]: value
        })

        console.log(formValues)
    }

    return [
        formValues,
        handleOnTextChange
    ]
}

export default useForm