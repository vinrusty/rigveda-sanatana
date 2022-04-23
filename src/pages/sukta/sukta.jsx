import React,{useEffect, useRef, useState} from 'react';
import AudioPlayer from 'react-h5-audio-player'
import H5AudioPlayer from 'react-h5-audio-player';
import "react-h5-audio-player/lib/styles.css";
import { useParams } from 'react-router'
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import Sanscript from "@sanskrit-coders/sanscript";
import { getAadhayasById } from '../data/data';
import './sukta.css'
import Navbar from '../../components/navbar/navbar';
import { getMandalamById } from '../data/data';
// var fs = require('browserify-fs');

function Sukta() {
    const languages = [
        "kannada",
        "telugu",
        "devanagari",
        "tamil",
        "iast",
      ];

  const {mandalam, aadhyayaa} = useParams()
  const data = getAadhayasById(Number(mandalam), Number(aadhyayaa));
  const mandalamData = getMandalamById(Number(mandalam))
  const audioRef = useRef(null);
  const [audioSource, setAudioSource] = useState(1);
  const [language, setLanguage] = useState("devanagari");
  const [aad, setAad] = useState(Number(aadhyayaa))

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      //@ts-ignore
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [audioSource, audioRef]);

  if(mandalam === '10'){
      
  }

  const folderLengths = [9,9,12,10,10,10,10,10,10,12]
  console.log(aad)
  return(
      <>
        <Navbar />
        <div className='player-wrapper'>
            <div className='aad-header'>
                <h1>Mandalam {mandalam} Adhyaya {aadhyayaa}</h1>
            <div
                className = 'audio-player'
                style={{
                    backgroundColor: "white",
                }}
                >
                <AudioPlayer
                    src={audioSource > 9 ? `/assets/audios/${mandalam}/${aadhyayaa}/0${audioSource}E.mp3` : `/assets/audios/${mandalam}/${aad}/00${audioSource}E.mp3`}
                    ref={audioRef}
                    className='player'
                    autoPlay
                    onEnded={() => {
                        setAudioSource(audioSource+1);
                    }}
                    onClickNext={() => {
                        setAudioSource(audioSource+1);
                    }}
                    onClickPrevious={() => {
                        setAudioSource(audioSource-1);
                    }}
                />
                </div>
                {/* <select
                name={language}
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                    border:"none",
                    borderRadius: "10px",
                    margin: "10px",
                    padding: "10px",
                    outline: "none",
                    cursor: "pointer",
                    background: "yellow"
                }}
                >
                {languages.map((language, index) => (
                    <option key={index} value={language}>
                    {language}
                    </option>
                ))}
            </select> */}
            </div>
            <div className='aad-lyrics'>
            {data.sukta.map((item, index) => {
                    return <Texts language={language} key={index} />;

                    function Texts({ language }) {
                    return (
                        <div
                        key={item.id}
                        onClick={() => setAudioSource(item.id)}
                        //@ts-ignore
                        ref={item.id === audioSource ? scrollRef : null}
                        style={{cursor: "pointer", padding: "2rem"}}
                        >
                        <h3
                            style={{ color: item.id === audioSource ? "blueviolet" : "black" }}
                        >
                            <b>{Sanscript.t(item.a, "devanagari", language)}</b>
                        </h3>
                        <h4
                            style={{ color: item.id === audioSource ? "blueviolet" : "black" }}
                        >
                            {Sanscript.t(item.c, "devanagari", language)}
                        </h4>
                        <br />
                        </div>
                    );
                    }
                })}
            </div>
        </div>
      </>
  )
}

export default Sukta;
