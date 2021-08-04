import { style } from '@angular/animations';
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map: L.Map | undefined;
  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }


  createMap() {
    const parcThabor = {
      lat: 13.762016488247493,
      lng: 100.56661816848172,
    };

    const zoomlevel = 16;
    this.map = L.map('map', {
      center: [parcThabor.lat, parcThabor.lng],
      zoom: zoomlevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 10,
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);


    // Define an icon called cssIcon
    var cssIcon = L.divIcon({
      // Specify a class name we can refer to in CSS.
      className: 'css-icon',
      html: '<div class="gps_ring"></div>'
      // Set marker width and height
      , iconSize: [33, 33]
      // ,iconAnchor: [11,11]
    });

    // define the marker path icon for web-pack not to be confused 
    const markerIcon = {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        // specify the path here
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
      })
    };

    // Define an icon called animatedCircleIcon and set the css
    const animatedCircleIcon = {
      icon: L.divIcon({
        className: "css-icon",
        html: '<div class="gps_ring"></div>',
        iconSize: [40, 40]
      })
    };

    // add the marker icon
    L.marker(parcThabor, markerIcon).addTo(this.map);
    // add the animatedCircleIcon
    L.marker(parcThabor, animatedCircleIcon).addTo(this.map);

    let Number = 0;
    
    //polygon ไม่ได้แยกเป็น Layer
    const polygon = L.polygon([
      [13.760901451657936, 100.56645725772464], [13.76222490652647, 100.56493377118323], [13.762881409266864, 100.56680059964326], [13.761891406777046, 100.56848502520793]
    ], {color: 'red' }).addTo(this.map)
    const polygon1_2 = L.polygon([
      [13.760901451657936, 100.56645725772464], [13.76222490652647, 100.56493377118323], [13.762881409266864, 100.56680059964326], [13.761891406777046, 100.56848502520793]
    ], {  color: 'blue' }).addTo(this.map)
    const polygon3 = L.polygon([
      [13.766570397251092, 100.56950431396163], [13.766674576275433, 100.57240116000243], [13.764850950443805, 100.5712209266079], [13.765163597164245, 100.56801298175255]
    ], {  color: 'red' }).addTo(this.map)
    const polygon3_2 = L.polygon([
      [13.766570397251092, 100.56950431396163], [13.766674576275433, 100.57240116000243], [13.764850950443805, 100.5712209266079], [13.765163597164245, 100.56801298175255]
    ], { fillOpacity: 0, color: 'blue' }).addTo(this.map)
    const polygon4 = L.polygon([
      [13.763861002272284, 100.56389310605212], [13.763089861074423, 100.56170442824164], [13.766924703453432, 100.56141471461375], [13.767081012382146, 100.56586725365602]
    ], {  color: 'red' }).addTo(this.map)
    const polygon4_2 = L.polygon([
      [13.763861002272284, 100.56389310605212], [13.763089861074423, 100.56170442824164], [13.766924703453432, 100.56141471461375], [13.767081012382146, 100.56586725365602]
    ], { fillOpacity: 0, color: 'blue' }).addTo(this.map)
    const polygon5 = L.polygon([
      [13.75662544616701, 100.56283786944823], [13.754437015431312, 100.56191519845397], [13.757354903046789, 100.55986596574884], [13.75801143452991, 100.56595998432543]
    ], {  color: 'red' }).addTo(this.map)
    const polygon5_2 = L.polygon([
      [13.75662544616701, 100.56283786944823], [13.754437015431312, 100.56191519845397], [13.757354903046789, 100.55986596574884], [13.75801143452991, 100.56595998432543]
    ], { fillOpacity: 0, color: 'blue' }).addTo(this.map)
    const polygon6 = L.polygon([
      [13.75934361551782, 100.57644252564266], [13.759690575545289, 100.5780501637338], [13.757075695149158, 100.57844562840597], [13.757286430802461, 100.57623834884603]
    ], {  color: 'red' }).addTo(this.map)
    const polygon6_2 = L.polygon([
      [13.75934361551782, 100.57644252564266], [13.759690575545289, 100.5780501637338], [13.757075695149158, 100.57844562840597], [13.757286430802461, 100.57623834884603]
    ], {  fillOpacity: 0,color: 'blue' }).addTo(this.map)
    const polygon7 = L.polygon([
      [13.752485663727962, 100.57020916481035], [13.753613429018618, 100.57057918129951], [13.752944183990111, 100.57236542027263], [13.752683929653742, 100.57235265697302]
    ], {  color: 'red' }).addTo(this.map)
    const polygon7_2 = L.polygon([
      [13.752485663727962, 100.57020916481035], [13.753613429018618, 100.57057918129951], [13.752944183990111, 100.57236542027263], [13.752683929653742, 100.57235265697302]
    ], {  fillOpacity: 0,color: 'blue' }).addTo(this.map)
    const polygon8 = L.polygon([
      [13.76424577442502, 100.55285369753706], [13.76539823353214, 100.55021256737896], [13.76868228349075, 100.55198600650607], [13.76744304352225, 100.55425714864872]
    ], {  color: 'red' }).addTo(this.map)
    const polygon8_2 = L.polygon([
      [13.76424577442502, 100.55285369753706], [13.76539823353214, 100.55021256737896], [13.76868228349075, 100.55198600650607], [13.76744304352225, 100.55425714864872]
    ], {  fillOpacity: 0,color: 'blue' }).addTo(this.map)
    const polygon9 = L.polygon([
      [13.783980720900379, 100.55545456284031], [13.78390637344007, 100.55729184708996], [13.78256809181059, 100.55787874943674], [13.781056335575709, 100.55699838707274]
    ], {  color: 'red' }).addTo(this.map)
    const polygon9_2 = L.polygon([
      [13.783980720900379, 100.55545456284031], [13.78390637344007, 100.55729184708996], [13.78256809181059, 100.55787874943674], [13.781056335575709, 100.55699838707274]
    ], {  fillOpacity: 0,color: 'blue' }).addTo(this.map)
    const polygon10 = L.polygon([
      [13.789814746288746, 100.57439037392761], [13.791388410820002, 100.5745179598955], [13.78964126842109, 100.57611281193034], [13.789740397274594, 100.5760362596139]
    ], {  color: 'red' }).addTo(this.map)
    const polygon10_2 = L.polygon([
      [13.789814746288746, 100.57439037392761], [13.791388410820002, 100.5745179598955], [13.78964126842109, 100.57611281193034], [13.789740397274594, 100.5760362596139]
    ], {  fillOpacity: 0,color: 'blue' }).addTo(this.map)
    const polygon11 = L.polygon([
      [13.726500853780529, 100.54438862482169], [13.733887790394046, 100.54556223324994], [13.734234581636118, 100.53882544713683], [13.729970865688317, 100.53678424291485]
    ], {  color: 'red' }).addTo(this.map)
    const polygon11_2 = L.polygon([
      [13.726500853780529, 100.54438862482169], [13.733887790394046, 100.54556223324994], [13.734234581636118, 100.53882544713683], [13.729970865688317, 100.53678424291485]
    ], {  fillOpacity: 0,color: 'blue' }).addTo(this.map)


//function blink
    setInterval(() => {
      for (let index = 0; index < 1; index++) {
        if((Number <= 1))
        {
          Number = Number + 0.1;
          console.log("Number 1:"+Number)
          polygon.setStyle({
            fillOpacity: Number
          })
          polygon3.setStyle({
            fillOpacity: Number
          })
          polygon4.setStyle({
            fillOpacity: Number
          })
          polygon5.setStyle({
            fillOpacity: Number
          })
          polygon6.setStyle({
            fillOpacity: Number
          })
          polygon7.setStyle({
            fillOpacity: Number
          })
          polygon8.setStyle({
            fillOpacity: Number
          })
          polygon9.setStyle({
            fillOpacity: Number
          })
          polygon10.setStyle({
            fillOpacity: Number
          })
          polygon11.setStyle({
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
    
    

    

    polygon.bindTooltip("Alert fire");


    this.map.on('click', function () {
      polygon.bringToFront();
      
    });

    this.map.on('dblclick', function () {
      polygon1_2.bringToFront();
    });




  }

  

}
