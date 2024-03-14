import React from 'react'
import { toast } from 'react-toastify'

function useToasty() {
 //success and error and warning and info

    const toastySuccess = (message) => toast.success(message)
    const toastyError = (message) => toast.error(message)
    const toastyWarning = (message) => toast.warning(message)
    const toastyInfo = (message) => toast.info(message)


    return { toastySuccess, toastyError, toastyWarning, toastyInfo }

}

export default useToasty