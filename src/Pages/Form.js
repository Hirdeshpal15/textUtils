import { useState } from 'react';
import './Form.css';


const Body = () => {

    const [input, setInput] = useState('');

    const upperHandler = (e) => {
        e.preventDefault();
        let upperCaseText = input.toUpperCase();
        setInput(upperCaseText);
    }

    const lowerHandler = (e) => {
        e.preventDefault();
        let lowerCaseText = input.toLowerCase();
        setInput(lowerCaseText);
    }

    const clearHandler = (e) => {
        e.preventDefault();
        setInput('');
    }

    const copyHandler = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(input);
    }

    const spaceHandler = (e) => {
        e.preventDefault();
        let spaceRemove = input.split(/[ ]+/);
        setInput(spaceRemove.join(" "));
    }

    return (

        <div className='body'>
            <div className='bodyPart'>
                <h1>Try TextUtils - character counter, remove extra spaces</h1>
                <div className="text">
                    <textarea className="formcontrol" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
                </div>
                <div className='allButton'>
                    <button className='btn' onClick={upperHandler} >Covert to UpperCase</button>
                    <button className='btn' onClick={lowerHandler} >Covert to LowerCase</button>
                    <button className='btn' onClick={clearHandler} >Clear Text</button>
                    <button className='btn' onClick={copyHandler} >Copy Text</button>
                    <button className='btn' onClick={spaceHandler} >Remove Extra Spaces</button>
                </div>
                <div className='textSummry'>
                    <h2>Your Text Summary</h2>
                    <p>{input.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {input.length} Charaters</p>
                    <p>{0.008 * input.split(/\s+/).filter((element) => { return element.length !== 0 }).length} mins to read</p>
                </div>
                <div className='textSummry'>
                    <h2>Preview</h2>
                    <p style={{ color: 'gray' }} >{input.split().filter((element) => { return element })}</p>
                </div>
            </div>
        </div>

    )
}

export default Body
