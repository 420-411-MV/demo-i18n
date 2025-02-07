import { useState } from "react";
import './PlayButton.css';

const PlayButton = () => {
    const [etat, setEtat] = useState('play');

    let imageEtat =             <svg xmlns="http://www.w3.org/2000/svg" width="75" height="88" viewBox="0 0 75 88" fill="none">
                    <path d="M75 44L0 87.3013L0 0.69873L75 44Z" fill="#13FF2F"/>
                </svg>;



    const handlePlayBtn = () => 
        {
            if (etat == 'play') {
                setEtat('pause');
            } else {
                setEtat('play');
            }
        };

    if (etat == 'pause') {
        imageEtat = <svg xmlns="http://www.w3.org/2000/svg" width="79" height="58" viewBox="0 0 79 58" fill="none">
        <path d="M46.0833 45.9167V12.0833H59.25V45.9167H46.0833ZM19.75 45.9167V12.0833H32.9167V45.9167H19.75Z" fill="white"/>
        </svg>;
    } else {
        imageEtat = <svg xmlns="http://www.w3.org/2000/svg" width="75" height="88" viewBox="0 0 75 88" fill="none">
        <path d="M75 44L0 87.3013L0 0.69873L75 44Z" fill="#13FF2F"/>
    </svg>;
    }



    return (
        
        <>
          <div className="playBtn" onClick={handlePlayBtn}>
            {imageEtat}
          </div>
        </>

    );
};

export default PlayButton;