import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { ListNo, SetCategories, SetCurrentCategory } from "../Store/Actions";
import MyPagination from "../Components/Pagination";
import { Col, Container, Row } from "reactstrap";

function Home() {
  const [result, setResult] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const searchWord = useSelector((state) => state.searchWord);
  const numberOfPage = useSelector((state) => state.noOfPage);
  const numberOfi = useSelector((state) => state.noOfItem);
  const dispatch = useDispatch();
  const setNoOfItem = (num) => {
    dispatch(ListNo(num));
  };
  const SetDefaultCategories = (categories) => {
    dispatch(SetCategories(categories));
  };

  // useEffect(()=>{
  //   Setcurrentcategory("");
  // }
  // ,[])

  useEffect(() => {
    console.log("hello from did page mount");
    axios
      .get(
        `https://dummyjson.com/products?limit=10&skip=${numberOfPage - 1}0`
      )
      .then((res) => {
        setDisplayList(res.data.products);
      })
      .catch();
}, [numberOfPage]);

useEffect(() => {
  console.log("hello from search mount");
  if (searchWord) 
    axios
      .get(`https://dummyjson.com/products/search?q=${searchWord}`)
      .then((res) => {
        setDisplayList(res.data.products);
        setNoOfItem(res.data.products.length);
      })
      .catch();
}, [searchWord]);

  useEffect(()=>{
    console.log("hello from did mount");
    axios
        .get("https://dummyjson.com/products?limit=0")
        .then((res) => {
          setResult(res.data.products);
          setNoOfItem((res.data.products).length);
        })
        .catch();
      axios
        .get("https://dummyjson.com/products/categories")
        .then((res) => {
          SetDefaultCategories(res.data);
        })
  },[])


  console.log(numberOfi);
  return (
    <>
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
    </>
  );
}

export default Home;
