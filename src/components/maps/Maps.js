import "./style.css";
import { Link } from 'react-router-dom'
import IconMove from "../../assets/icon/ic_next.png";

const Maps = () => {
    return (
        <div id="maps">
            <div className="peta">
                <div className="title">
                    <h2 className="blue-signature s5">Peta Gereja</h2>
                    <p className="gray">Berikut adalah sebaran Gereja di Indonesia untuk Siaga Bencana!</p>
                </div>
                <div className="action">
                    <p className="gray">Lihat Selengkapnya!</p>
                    <Link to="/peta">
                        <div id="next" className="btnright"><img src={IconMove} width="20px" height="20px" alt="" aria-hidden="true" draggable="false" /></div> 
                    </Link>
                </div>
            </div>
        </div>    
    )
}

export default Maps;