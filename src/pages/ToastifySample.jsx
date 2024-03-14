import React from 'react'
import useToasty from '../hooks/useToasty'

function ToastifySample() {

    const { toastySuccess, toastyError, toastyWarning, toastyInfo } = useToasty()

    return (<>
        <button onClick={() => toastySuccess('Success')}>Success</button>
        <hr />
        <button onClick={() => toastyError('Error')}>Error</button>
        <hr />
        <button onClick={() => toastyWarning('Warning')}>Warning</button>
        <hr />
        <button onClick={() => toastyInfo('Info')}>Info</button>

    </>
    )
}

export default ToastifySample