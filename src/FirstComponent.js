import React, { useState } from 'react'

const FirstComponent = () => {
    const [titolo, setTitolo] = useState("Hello World!");
    const cambioTitolo = () => {
        if (titolo === "Hello World!") {
            setTitolo("Ciao a tutti!");
        }
        else {
            setTitolo("Hello World!");
        }
    }
    return (
        <>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>{titolo}</h1>
                    <button className='btn btn-info shadow my-3' onClick={cambioTitolo}>
                        Clicca qui!
                    </button>
                </div>
            </div>
        </>
    )
}

export default FirstComponent