import React from 'react'

function UseMemoSample() {

    const expensiveFunction = (number) => {
        console.log("Expensive function called");
        return number * 2
    }

    const memoizedValue = React.useMemo(() => expensiveFunction(5), [])

    return (
        <div>
            <h1>Memoized value: {memoizedValue}</h1>
        </div>
    )
}

export default UseMemoSample