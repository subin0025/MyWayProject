/*global kakao*/
import React, { Component } from 'react';
import './Map.css';


class Map extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f85ddf5e281d115ed0937f1447c391d6&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let mapContainer = document.getElementById('map'),
                mapOption ={
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3
                };

                let map = new kakao.maps.Map(mapContainer, mapOption );
               
            });
        };
    }

    render() {
        return (
            <div className="Map" id="map" >
                지도
            </div>
        );
    }

}

export default Map;
