import React, { useEffect, useRef,useState } from "react";
import Layout from "../components/layout";
import contactModule from "../styles/contact.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
const Contact = () => {
const [isBrowser,setWindow] = useState(null)
  useEffect(() => {

      if(typeof window!="undefined"){
        setWindow(true);
      }


  },[]) 
 return (
    <>
      <Layout marginTop={"150px"}>
        <div className="container">
          <div className="text-center">
            <h3 className={`${contactModule.__contact__h3}`}>Contact Us</h3>
          </div>
          <p className={`text-center ${contactModule.__contact__p} `}>
            If you think we can help you or you want to say just hi!
          </p>

          <div class={`row ${contactModule.__contact__row}`}>
            <div class="col-lg-6 col=md-6 col-xl-12">
                           <div>
{ 
                           isBrowser && MapContainer && <MapContainer center={[20.3205694, 72.9687646]} zoom={10} className={`${contactModule.__contact__map}`} scrollWheelZoom={false}>
                              <TileLayer
                              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                              <Marker position={[20.3205694, 72.9687646]}>
                              <Popup>
                              Shreeji Industrial Estate,
                  Gala No.9, Demni Rd, Dadra, Dadra and Nagar Haveli and Daman
                  and Diu 396193
                              </Popup>
                              </Marker>
                              </MapContainer>
 }  
                           </div>
            
            </div>

            <div class="col-lg-6 col=md-6 col-xl-12 text-center">
              <div className={`${contactModule.__contact_details}`}>
                <p className={contactModule.__contact__p}>
                <address> <i class="bi bi-geo-alt-fill"></i> Shreeji Industrial Estate,
                  Gala No.9, Demni Rd, Dadra, Dadra and Nagar Haveli and Daman
                  and Diu 396193</address>
                </p>
                <p className={contactModule.__contact__p}>
                <i class="bi bi-envelope-fill"></i>
                  <a href="mailto:nikitawriting2017@gmail.com"> nikitawriting2017@gmail.com </a>
                </p>
                <p className={contactModule.__contact__p}>
                  <i class="bi bi-telephone-fill"></i> <a href="tel:74879 84066">74879 84066</a> | <a href="tel:87990 51145">87990 51145</a>{" "}
                </p>
                <p className={`${contactModule.__contact__socialmedia}`}>
                  <a href="https://www.instagram.com/cheese_pens/" target="__blank">
                              <i class={`bi bi-instagram ${contactModule.__contact__social}`}></i> 
                  </a>
                  <a href="https://www.facebook.com/cheesepens/" target="__blank">
                              <i class={`bi bi-facebook ${contactModule.__contact__social}`}></i> 
                  </a>
                  <a href="https://twitter.com/cheesepens" target="__blank">
                              <i class={`bi bi-twitter ${contactModule.__contact__social}`}></i> 
                  </a>
                  
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
