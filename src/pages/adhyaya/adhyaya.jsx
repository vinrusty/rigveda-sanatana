import "./adhyaya.css"
import Navbar from "../../components/navbar/navbar"
import { Link, useParams } from "react-router-dom";
import { getMandalamById } from "../data/data";

function Adhyaya(){

    const { mandalam } = useParams()
    
    return(<>
     
     <Navbar />
<section id="team">
    <div class="title-text">
    
    <h1>Adhyaya</h1>
    </div>
    <div class="team-box">
        <div class="single-team-box">
        {
                    getMandalamById(Number(mandalam)).aadhayaa.map((m, index) => {
                        return(
                            <Link style={{margin:"10px"}} key={index} to={`/contents/${mandalam}/${m.id}`}><button type="button" className="btn btn-secondary btn1">{m.id}</button></Link>
                        )
                    })
                }
        </div>
    </div>
</section>

    

    </>);


}

export default Adhyaya;