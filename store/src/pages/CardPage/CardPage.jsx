import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

function CardPage(item) {
  const {id} = useParams();
    console.log(item);
  return (
    <div> 
        <span>This is cardPage and this id {id}</span>
        <Card key={item.id} item={item} />
    </div>
  )
}

export default CardPage