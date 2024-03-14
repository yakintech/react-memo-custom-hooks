import React from 'react'
import useProducts from '../api/hooks/useProducts'

function Products() {
    const { data, error, loading } = useProducts()

    return (<>
        {
            loading ? <h1>Loading...</h1> : <>
                {
                   <table>
                     <thead>
                          <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                            {data.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.unitPrice}</td>
                                    </tr>
                                )
                            })}
                        </tbody>

                   </table>
                }
            </>
        }
    </>
    )
}

export default Products