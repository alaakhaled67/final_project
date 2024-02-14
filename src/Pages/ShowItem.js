import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import MyPagination from "../Components/Pagination";

function ShowItem() {
  const id = useParams().id;
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {        
        setResult(res.data)})
      .catch();
  }, []);
  return (
    <>{result.length!=0&&
      <Card className="col-6">
        <Card.Img variant="top" src={result.images[0]} />
        <Card.Body>
          <Card.Text>{result.title}</Card.Text>
        </Card.Body>
      </Card>
    }
    </>
  );
}

export default ShowItem;
