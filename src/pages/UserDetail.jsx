import React from 'react'
import useGithub from '../hooks/useGithub'

function UserDetail(props) {

    const { user, error, loading } = useGithub(props.name)


    return (<>
        {
            loading ? <h1>Loading...</h1> : <>
                <h1>Login: {user.login}</h1>
                <h1>Company: {user.company}</h1>
                <h1>Location: {user.location}</h1>
            </>
        }
    </>
    )
}

export default UserDetail