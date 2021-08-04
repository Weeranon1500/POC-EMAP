import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map-jpg',
  templateUrl: './map-jpg.component.html',
  styleUrls: ['./map-jpg.component.css']
})
export class MapJpgComponent implements AfterViewInit {
  map: L.Map | undefined;
  kitten:any|undefined;
  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap()
  {
    const parcThabor = {
      lat: 13.762016488247493,
      lng: 100.56661816848172,
    };

    const zoomlevel = 18;
    this.map = L.map('map', {
      center: [parcThabor.lat, parcThabor.lng],
      zoom: zoomlevel
    });

    const mainLayer = L.tileLayer('https://sv1.picz.in.th/images/2021/07/27/2TDjWZ.png', {
      minZoom: 10,
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.picz.in.th/image/2TDjWZ">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map)

  //   L.TileLayer.Kitten = L.TileLayer.extend({
  //     getTileUrl: function(coords) {
  //         var i = Math.ceil( Math.random() * 4 );
  //         return "https://placekitten.com/256/256?image=" + i;
  //     },
  //     getAttribution: function() {
  //         return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>"
  //     }
  // });
  
  // L.tileLayer.kitten = function() {
  //     return new L.TileLayer.Kitten();
  // }
  
  // L.tileLayer.kitten().addTo(this.map);


  const polygon = L.polygon([
    [13.763001451657936, 100.56615725772464], [13.76222490652647, 100.56615725772464], [13.76222490652647, 100.56666502520793], [13.763001451657936, 100.56666502520793]
  ], {color: 'red' }).addTo(this.map)
  const polygon1_2 = L.polygon([
    [13.763001451657936, 100.56615725772464], [13.76222490652647, 100.56615725772464], [13.76222490652647, 100.56666502520793], [13.763001451657936, 100.56666502520793]
  ], { fillOpacity: 0, color: 'blue' }).addTo(this.map)




  let Number = 0;
  setInterval(() => {
    for (let index = 0; index < 1; index++) {
      if((Number <= 1))
      {
        Number = Number + 0.1;
        console.log("Number 1:"+Number)
        polygon.setStyle({
          fillOpacity: Number
        })
        
      }
      else if(Number > 1)
      {
        Number = 0;
        console.log("Number 2:"+Number)
      }
      
    }
  }, 50)



  }
}
