import Navbar from "../../components/navbar/navbar";

import "./home.css";


function Home(){
    return( 
        <>
         <Navbar></Navbar>

        <section id="banner">
           <div class="banner-text">
               <h1>ऋग्वेदः</h1>
                
           </div>
             <div class="banner-btn">
                 <a href="/contents"><span></span>Listen To Veda</a>
                 <a href="/about"><span></span>About</a>

             </div>
        </section>

        </>
    );
}
export default Home;