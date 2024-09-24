import React, {useState} from "react";

function Car(){
    const [car, setCar] = useState({year: 2024,
                                   make: "Ford",
                                   model: "Mondeo"});

    function handelYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handelMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handelModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return( <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handelYearChange}/><br></br>
                <input type="text" value={car.make} onChange={handelMakeChange}/><br></br>
                <input type="text" value={car.model} onChange={handelModelChange}/>

            </div>);
}

export default Car;