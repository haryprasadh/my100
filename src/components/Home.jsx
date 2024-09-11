import { useEffect, useState } from "react"
import Song from "./Song";
import Player from "./Player";

export default function Home(){
    const DATA_URL = 'https://raw.githubusercontent.com/krtk-dev/billboard-player/main/data/recent.json';
    const [songs,setSongs] = useState([{youtube_id:''}]);
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        fetch(DATA_URL).
        then(res => res.json()).
        then(obj => setSongs(obj.data));
    });

    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:'5vh'}}>
            <Player song={songs[index]}/>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',height:'90vh',
                overflowY:'scroll',overflowX:'hidden',border:'solid',padding:'3px',borderRadius:'10px'
                }}>
                {
                    songs.map((song) => (
                        <Song song={song} index={index} setIndex={setIndex}/>
                    ))
                }
            </div>
        </div>
    )
}