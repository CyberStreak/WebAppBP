import image from './img/dreiFragezeichen.png'

const ImageElement = () => {
    return(
        <div>
            <div>
                <p className={"bild-titel"}>Eins, Zwei oder Drei???</p>
            </div>
            <img src={image} alt="Die drei Fragezeichen"/>
        </div>
    );
};

export default ImageElement;