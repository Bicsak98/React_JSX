import { useState } from "react";

function MyComponent_Car(){

    const [cars,setCar] = useState([]);
    const [caryear,setYear] = useState(new Date().getFullYear());
    const [carmake,setMake] = useState("");
    const [carmodel,setModel] = useState("");

    function handelAddCar(){
        const newCar = {year:caryear,
                         make:carmake,
                         model:carmodel};

        setCar(c=>[...c,newCar]);
        
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");

    }

    function handelRemoveCar(index){
        setCar(c=> c.filter((_,i) => i!==index));
    }

    function handelYearChange(event){
        setYear(event.target.value);
    }

    function handelMakeChange(event){
        setMake(event.target.value);
    }

    function handelModelChange(event){
        setModel(event.target.value);
    }

    return(<div>
                <h2>List of Car Object</h2>
                <ul>
                    {cars.map((car,index)=><li key={index} onClick={() => handelRemoveCar(index)}>
                                                {car.year}
                                                {car.make}
                                                {car.model}
                                            </li>)}
                </ul>
                <input type="number" value={caryear} onChange={handelYearChange}/><br></br>
                <input type="text" value={carmake} onChange={handelMakeChange} placeholder="Enter the make"/><br></br>
                <input type="text" value={carmodel} onChange={handelModelChange} placeholder="Enter the model"/><br></br>
                <button onClick={handelAddCar}>Add Car</button>
            </div>);

}
export default MyComponent_Car