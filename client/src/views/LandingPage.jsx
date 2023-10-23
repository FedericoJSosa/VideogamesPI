

import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const LandingPage = () => {
    return (
        <div className={style.background}>
            <Link to="/home" className={style.button}>
                Gaming encyclopedia
            </Link>
        </div>
    );
};

export default LandingPage;
