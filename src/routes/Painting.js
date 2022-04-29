import { useState, useEffect, useRef } from "react"

import React from 'react';
import hurry1 from '../assets/img/Hurry/hurry-1.png'
import hurry2 from '../assets/img/Hurry/hurry-2.png'
import hurry3 from '../assets/img/Hurry/hurry-3.png'
import hurry4 from '../assets/img/Hurry/hurry-4.png'
import hurry5 from '../assets/img/Hurry/hurry-5.png'
import hurry6 from '../assets/img/Hurry/hurry-6.png'
import hurry7 from '../assets/img/Hurry/hurry-7.png'
import hurry8 from '../assets/img/Hurry/hurry-8.png'
import hurry9 from '../assets/img/Hurry/hurry-9.png'
import findMe from '../assets/audio/find-me.ogg'
import scream from '../assets/audio/scream.ogg'
import '../styles/Painting-style.css'

const Echo = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const imgArray = [
        hurry1,
        hurry2,
        hurry3,
        hurry4,
        hurry5,
        hurry6,
        hurry7,
        hurry8,
    ]

    const switchImage = () => {
        let newIndex = currentImage;

        if (newIndex < imgArray.length - 1) {
            newIndex++;
            setCurrentImage(newIndex);
        }
        return currentImage;
    }


    useEffect(() => {
        const aud = document.getElementById("song")

        aud.play();
        aud.loop = false;

        setInterval(switchImage, 5000);
    });

    return (
        <div>
            <audio autoPlay id="song">
                <source src={findMe} type="audio/ogg" />
            </audio>
            <img
                src={imgArray[currentImage]}
                alt="cAn YoU fInD tHe KeY?"
            />
        </div>
    );
}

const Jumpscare = () => {


    return (
        <div>
            <audio autoPlay id="scare">
                <source src={scream} type="audio/ogg" />
            </audio>
            <img src={hurry9} alt="Oh no, looks like you failed" />
        </div>
    )
}

const Painting = () => {

    const [failed, setFailed] = useState(false);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setFailed(true), 40000);

        console.log(failed);
        return () => clearTimeout(timer);
    }, [failed])

    const validate = () => {
        console.log("clicked!")
        // Get the value of the input field with id="numb"
        let x = document.getElementById("rolld20").value;
        // If x is Not a Number or less than one or greater than 10
        let text;
        setAnswer(x);
        if (isNaN(x) || answer !== '17') {
            text = "Uh-Oh! Wrong Doll ;)";
            console.log(text + " " + x)
        } else {
            text = "You found it!";
            console.log(text)
        }
        document.getElementById("demo").innerHTML = text;
    }

    if (failed === false) {
        if (answer !== '17')
            return (
                <div>
                    <Echo />
                    <input id="rolld20" type="text"></input>
                    <button type="button" onClick={validate}>Submit</button>
                    <p id="demo"></p>
                </div>
            );
        else if (answer === '17') {
            alert("You found the key!")
            window.open("about:blank", "_self");
            window.close();
        }

    } else {

        return <Jumpscare />;
    }

}

export default Painting;