import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosInstance'


function useProducts() {

    const [data, setdata] = useState([])
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(true)

    useEffect(() => {
        
        axiosInstance.get('/products')
            .then((response) => {
                setdata(response.data)
                setloading(false)
            })
            .catch((error) => {
                seterror('Error fetching data')
                setloading(false)
            })
            .finally(() => {
                setloading(false)
            })

    }, [])

    return { data, error, loading }
    

}

export default useProducts