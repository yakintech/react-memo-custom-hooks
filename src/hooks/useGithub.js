import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useGithub(userName) {

    const [user, setuser] = useState({})
    const [error, seterror] = useState({})
    const [loading, setloading] = useState(false)


    useEffect(() => {
      
        axios.get(`https://api.github.com/users/${userName}`)
        .then((res) => {
            setuser(res.data)
            setloading(false)
        })
        .catch((error) => {
            seterror(error)
            setloading(false)
        })

    }, [userName])
    
    return { user, error, loading }


}

export default useGithub