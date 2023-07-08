import React, { useEffect } from 'react';
import { Howl } from 'howler';
import NoTheme from '../assets/bgThemes/t-0.mp3';
import Theme1 from '../assets/bgThemes/t-1.mp3';
import Theme2 from '../assets/bgThemes/t-2.mp3';
import Theme3 from '../assets/bgThemes/t-3.mp3';
import { useGlobalContext } from '../contexts/globalContext';
import allThemes from '../utils/BGMusic';





function BackgroundMusic() {

   
const {bgMusicIndex} = useGlobalContext()

    useEffect(() => {
      const sound = new Howl({
        src: [allThemes[bgMusicIndex]], // Update with the path to your background music file
        autoplay: true,
        loop: true,
        volume: 0.5, // Adjust the volume as needed
      });
      sound.play();
  
      // Clean up the audio when the component is unmounted
      return () => {
        sound.stop();
      };
    }, [bgMusicIndex ]);

   
  
    return null;
  }

  export default BackgroundMusic;
  

  export {allThemes};