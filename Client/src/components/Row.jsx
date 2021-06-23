import React, { useEffect } from 'react';
import { useSongStore } from './Store';
import {data as val } from './Songs';
import axios from 'axios';

function Row(props) {
    const naam = props.name;
    let artist = props.artist;
    if (artist.length > 15) {
        artist = artist.slice(0, 30) + "...";
    }
    const songName = useSongStore(state => state.song)
    const setSong = useSongStore(state => state.setName)

    
    return <div className="row"
        onClick={ () => { setSong(val[props.name] + '.mp3') } }
        style={{ paddingBottom: "10px" }}>

        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "95%",
            height: "auto",
            marginTop: "10px",
            padding: "0px 30px"
        }}>
            <div className="flex-container">
                <p style={{
                    color: val[naam] +".mp3" !== songName ? "#aca4a4" : "#fff",
                    fontSize: "40%",
                }}>{props.id + 1}</p>
                <p style={{
                    marginLeft: "20px",
                    color: val[naam] +".mp3"!== songName ? "#aca4a4" : "#fff",
                    fontSize: "40%",
                }}>{naam}</p>
            </div>
            <div style={{
                width: "40%"
            }}>
                <p style={{
                    color: val[naam]+".mp3" !== songName ? "#aca4a4" : "#fff",
                    fontSize: "40%",
                }}>{artist}</p>
            </div>
        </div>
    </div>

}

export default Row;