import React, {useState} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState<string>('')

    const [peperoni, setPeperoni] = useState<boolean>(false)
    const [pineapple, setPineapple] = useState<boolean>(false)
    const [anchovies, setAnchovies] = useState<boolean>(false)
    const [eggplant, setEggplant] = useState<boolean>(false)

    return (
        <div className='App'>
            <h1>Pizza Order</h1>
            <div className={'orderView'}>

                <form className={'toppingInputs'}>
                    <input placeholder={'Your name'} onChange={e => setName(e.target.value)}/>

                    <label>
                        <input
                            type='checkbox'
                            checked={peperoni}
                            onChange={() => setPeperoni(!peperoni)}
                        />
                        Peperoni
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            checked={pineapple}
                            onChange={() => setPineapple(!pineapple)}
                        />
                        Pineapple
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            checked={anchovies}
                            onChange={() => setAnchovies(!anchovies)}
                        />
                        Anchovies
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            checked={eggplant}
                            onChange={() => setEggplant(!eggplant)}
                        />
                        Eggplant
                    </label>
                </form>
                
                <div className={'orderDetails'}>
                    <h2>Your Order</h2>
                    {name && <p>{name}</p>}
                    <br/>
                    {peperoni && <p>Pepperoni</p>}
                    {pineapple && <p>Pineapple</p>}
                    {anchovies && <p>Anchovies</p>}
                    {eggplant && <p>Eggplant</p>}
                </div>
            </div>
        </div>
    );
}

export default App;
