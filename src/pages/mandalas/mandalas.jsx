import "./mandalas.css"
import Navbar from "../../components/navbar/navbar"
import { getAllMandalam } from "../data/data";
import { Link } from "react-router-dom";


function Mandalas(){
    return(<>

    <Navbar/>



<section id="team">
    <div class="title-text">
    
    <h1>Mandalam</h1>
    </div>
    <div class="team-box">
        <div class="single-team-box">
        {
        getAllMandalam().map((mandalam, index) => {
            return(
                <Link className='mx-3' to={`/contents/${mandalam.id}`} style={{color:"inherit"}}><button key={index}  type="button">{mandalam.id}</button></Link>
            )
        })
    }
        </div>
    </div>
</section>

    
    </>);
}

export default Mandalas;