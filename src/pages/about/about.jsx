import "./about.css";
import Navbar from "../../components/navbar/navbar";
export default function About(){
    return(
        <>
        <Navbar />
         <section id="event">
    <div class="title-text">
   <p>About Veda</p>
   <h1>Know About Rig Veda </h1>
    </div>
    <div class="event-box">
        <div class="events">
            <h1>ऋग्वेदः</h1>
            <div class="events-desc">
                <div class="event-icon">
                <i class="fa fa-book"></i>
                </div>
                <div class="event-text">
                <blockquote><p>The Ṛgvēda is an ancient Indian collection of Vedic Sanskrit hymns along with associated commentaries on liturgy, ritual and mystical exegesis. It is one of the four sacred canonical texts (śruti) of Hinduism known as the Vedas.</p>
                <p>The core text, known as the Ṛgvēda Saṃhita, is a collection of 1,028 hymns (sūktas) in about 10,552 verses, organized into ten books (maṇḍalas). In the eight books that were composed the earliest, the hymns are mostly praise of specific deities. The younger books (books 1 and 10) in part also deal with philosophical or speculative questions, with the virtue of dāna (charity) in society and with other metaphysical issues in their hymns.

</p></blockquote>
               
                </div>

            </div>
            
        </div>
        <div class="events-img">
            <img src="https://clipartstation.com/wp-content/uploads/2017/11/indian-saint-clipart-10-1.jpg" alt="hackthon" />
        </div>

    </div>
    

</section>
        
        
        </>
    )
}