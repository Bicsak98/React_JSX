import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
function App() {
  const fruits = [{id: 1,name:"apple", calories: 90},
                  {id: 2,name:"orange", calories: 120},
                  {id: 3,name:"banana",calories: 200}];
  
  const vegetables = [{id: 4,name:"pepper", calories: 90},
    {id: 5,name:"salat", calories: 24},
    {id: 6,name:"onion",calories: 50}];
  return(
    <>
    {fruits.length >0 ? <List items = {fruits} category= "Fruits"></List> : null}
                                {/* || */}
    {vegetables.length >0 && <List items = {vegetables} category= "Vegetables"></List>}
    {/* <List items = {fruits} category= "Fruits"></List> */}
    {/* <List items = {vegetables} category= "Vegetables"></List> */}

    {/* <UserGreeting isLoggedIn={true} username="BroCode"></UserGreeting> */}

    {/* <Student name="Bence" age={30} isStudent={true}></Student>
    <Student name="Adam" age={50} isStudent={false}></Student>
    <Student name="Patrik" age={42} isStudent={false}></Student>
    <Student name="Angel" age={27} isStudent={true}></Student>
    <Student></Student> */}
     {/* <Button></Button> */}
     {/* <Header></Header> */}
     {/* <Card></Card> */}
     {/* <Food></Food> */}
     {/* <Footer></Footer> */}

    </>
   
  );
}

export default App
