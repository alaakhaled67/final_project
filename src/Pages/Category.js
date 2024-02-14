import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard";
import MyPagination from "../Components/Pagination";
import { ListNo, SetCategories, SetCurrentCategory } from "../Store/Actions";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Col, Container } from "reactstrap";
import { Row } from "react-bootstrap";

function Category(){
    const param = useParams();
    console.log(param);
    const [result, setResult] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const currentCategory=useSelector((state)=>state.currectCategory)
    const dispatch=useDispatch();
    const setNoOfItem=(num)=>{
      dispatch(ListNo(num));
    }



    
  useEffect(() => {
    console.log(currentCategory);
    if (currentCategory===""){
    axios.get("https://dummyjson.com/products?limit=0")
      .then((res) => {
        setResult(res.data.products);
        setDisplayList(res.data.products)
        setNoOfItem((res.data.products).length)
      }).catch();
      console.log(displayList);
    }
else
            axios
            .get(`https://dummyjson.com/products/category/${currentCategory.category}`)
            .then((res) => {
              setDisplayList(res.data.products);
              setNoOfItem((res.data.products).length);
            })
            .catch();
  }, [currentCategory]);
    return (    <>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {
            <>
              {
                displayList.map((product, ind) => {
                return (
                  <>
                    <Col>
                      <ItemCard
                        title={product.title}
                        img={product.images}
                        desc={product.description}
                        id={product.id}
                      />
                    </Col>
                  </>
                );
              })}
            </>
          }
        </Row>
      </Container>
      <Container>
      <MyPagination />
      </Container>
    </>);
        }



export default Category;