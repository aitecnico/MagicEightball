import React, { useState } from "react";
import "./EightBall.css";


// (3) select a random choice(value) function
function choice(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

function EightBall(props) {

    // (1) State and Updater
    const [msg, setMsg] = useState("Think of a Question.");
    const [color, setColor] = useState("black");

    // See "Think of question" in console
    console.log(msg)


    // const answersObj = {
    //     answers: [
    //         { msg: 'hello', color: 'blue' },
    //         { msg: 'This is working!', color: 'green' }
    //     ]
    // }


    function handleClick() {
        console.log("hi")
        // const { msg } = choice(props.answersObj);
        const { msg, color } = choice(props.dogs);
        // console.log(msg)
        setMsg(msg);
        setColor(color);
    }

    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: color }}
        >

            {/* (2) Show State "Think of question Value" in browser) */}
            <b>{msg}</b>


        </div>
    );
}

EightBall.defaultProps = {
    dogs: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
    ]
};

export default EightBall;
