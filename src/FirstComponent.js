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
                <h1 className='mb-5'>Componente 1</h1>
                <div className='col-12 text-center'>
                    <h2>{titolo}</h2>
                    <button className='btn btn-info shadow my-3' onClick={cambioTitolo}>
                        Clicca qui!
                    </button>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default FirstComponent