import ReactPlayer from 'react-player/youtube'

export default function Player({song}){
    const video_url = `https://youtu.be/${song.youtube_id}`;
    
    return(
        <div>
            <ReactPlayer url={video_url} controls='true' playing='false' width='800px' height='450px'/>
            <div style={{display:'flex',border:'solid',marginTop:'22px',justifyContent:'space-around',padding:'15px',borderRadius:'5px'}}>
                <img src={song.image} alt={`${song.name} image`} width='160px' height='160px' style={{borderRadius:'15px'}}/>
                <div style={{marginTop:'12px'}}>
                    <p style={{marginTop:'0px',marginBottom:'0px'}}>Rank: {song.rank}</p>
                    <p style={{marginTop:'0px',marginBottom:'0px'}}>Name: {song.name}</p>
                    <p style={{marginTop:'0px',marginBottom:'0px'}}>Artist: {song.artist}</p>
                    <p style={{marginTop:'0px',marginBottom:'0px'}}>Last week rank:{song.last_week_rank}</p>
                    <p style={{marginTop:'0px',marginBottom:'0px'}}>Peak rank: {song.peak_rank}</p>
                    <p style={{marginTop:'0px',marginBottom:'0px'}}>Weeks on chart:{song.weeks_on_chart}</p>
                </div>
            </div>
        </div>
    )
}