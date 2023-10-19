import React, { useState } from 'react';
import { data } from './data';

const SecondComponent = () => {
    const [people, setPeople] = useState(data);
    const removeItem = (id) => {
        const newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople);
    }
    return (
        <>
            <div className='row mt-5'>
                <h1>Componente 2</h1>
                {people.map((person, id) =>
                    <div className='col text-center mt-5' key={id}>
                        <div className='card mb-5'>
                            <h5>{person.name}</h5>
                            <button className='btn btn-danger' onClick={() => removeItem(person.id)}>
                                <strong>X</strong>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SecondComponent