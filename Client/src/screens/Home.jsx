import React, { useState, useEffect } from 'react';
import Box from '../components/Box';
import axios from 'axios';
import Artist from '../components/Artist';
import {data} from '../components/Songs';

function Home() {
    const [ songs, setsong ] = useState([{
        artists: "",
        name: "",
        year: 0,
    }]);
    const [ art, setArt ] = useState([{
        name: "",
    }]);
    useEffect(() => {
        axios({
            method: "POST",
            data:{
                "number" : 20,
            },
            withCredentials: true,
            url: "http://localhost:8000/api/recommendsongs",
        }).then((res) => {
            console.log(res);
            setsong(res.data.songs);
            console.log(songs);
        });
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8000/api/recommendartist",
        }).then((res) => {
            setArt(res.data.artists);
        });
    }, []);
    return <div className="home">
        <h1>Top Artists</h1>
        <div className="blur" style={{ marginTop: "30px" }}>
            <div className="flex-container">
            {
                art.map((val,key)=>{
                    return (<Artist image={val.name + ".jpg"} artist= {val.name} />);
                })
                
            }
            </div>
        </div>
        <div style={{ paddingTop: "30px" }}>
            <h1>Recommended Songs</h1>
            <div className="flex-container" style={{
                overflowX : "scroll",
            }}>
            {
                songs.map((val,key)=>{
                    
                    let pic = data[val.name];
                    let artists=val.artists.replace("[","").replace("]","").replaceAll("'","");
                    return (
                    <Box image={pic} name={val.name} artist={artists} />
                    );
                })
                
            }
                

            </div>
        </div>

    </div>
}

export default Home;