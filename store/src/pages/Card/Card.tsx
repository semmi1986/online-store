import style from './cadr.module.css';
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="card">
      <div className={style.cards}>Card</div>
    </Link>
    
  )
}

export default Card