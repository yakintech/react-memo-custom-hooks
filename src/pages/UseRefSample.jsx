import React from 'react'

function UseRefSample() {

    const h1Ref = React.useRef();

    const change = () => {
        document.getElementById('title').style.color = 'red';
    }

    const changeWithRef = () => {
        h1Ref.current.style.color = 'blue';
    }


    return (<>
        <h1 id='title'>Çağatay Yıldız</h1>
        <button onClick={change}>Change Color</button>

        <hr />
        <h1 ref={h1Ref}>Çağatay Yıldız</h1>
        <button onClick={changeWithRef}>Change Color</button>
    </>)
}

export default UseRefSample