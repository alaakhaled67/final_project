import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom';


function ItemCard(props){
    return(<>
                    <Card style={{ width: '18rem' }}>
                    <Link to={`/show_item/${props.id}`}>
      <Card.Img variant="top" src={props.img[0]} />
      </Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}
        </Card.Text>
        <Button variant="primary">buy it</Button>
      </Card.Body>
    </Card>
    </>)
}


export default ItemCard;