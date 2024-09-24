import React, {useState} from 'react'

function MyComponent_Food(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handelAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFoods(f => [...f,newFood]);

    }

    function handelRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(<div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) => <li key={index} onClick={() => handelRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type='text' id='foodInput' placeholder='Enter food name'></input>
            <button onClick={handelAddFood}>Add Food</button>
            </div>);
}
export default MyComponent_Food