import {useState} from "react";
import "./HelloRandom.css"
const HelloRandom = () => {
    const names = ['React', 'World', 'Everyone']
    const [currentText, setCurrentText] = useState(names[0])
    const [count, setCount] = useState<number>(0)

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * names.length)
        setCount((preCount) => preCount + 1)
        setCurrentText(names[randomIndex])
    };

    const handle2 = () => {
        setCount(0)
        setCurrentText(names[0])
    };

    return (
        <div>
            <h1 className="überschrift">Exercise 2</h1>
            <button className="button" onClick={handleClick}>Random Name</button>
            <button className="button" onClick={handle2}>Reset</button>
            <p className="current-text">Hello {currentText}!</p>
            <p className="current-text">You pressed the Button {count} times!</p>
        </div>
    );
};

export default HelloRandom;