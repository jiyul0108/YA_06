import { useState } from "react";
import Header from "./Header";
import H3 from "../components/H3";
import image1 from "../assets/memo1.jpg"
import image2 from "../assets/memo2.jpg"
import image3 from "../assets/memo3.jpg"
import Button from "../components/Button";
import './Home.css'; 

const images = [image1, image2, image3];
const soga = [
    "사이트 소개 및 사용방법",
    "사이트 소개222",
    "사이트 소개 333"
]

function Home(){
    const [slideIndex, setSlideIndex] = useState(0);

    const leftBtn = () => {
        setSlideIndex((slideIndex - 1 + images.length) % images.length);
    }

    const rightBtn = () => {
        setSlideIndex((slideIndex + 1) % images.length);
    }

    return (
        <div>
            <H3 text={"원하는 메모를 입력하세요"}/>
            <div className="slider-container">
                <H3 text={soga[slideIndex]}/>
                <Button text={"👈"} onClick={leftBtn}/>
                <img src={images[slideIndex]} alt="슬라이드" className="slider-image"/>
                <Button text={"👉"} onClick={rightBtn}/>
            </div>
        </div>
    );
}

export default Home;