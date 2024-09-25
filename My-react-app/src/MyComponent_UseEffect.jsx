import React,{useState,useEffect} from "react"

function MyComponent_UseEffect(){
    // const [count,setCount] = useState(0);
    // const [color,setColor] = useState("green");
    
    // useEffect(() => {
    //     document.title = `Count ${count} ${color}`;
    // },[count, color]);
    
    // function addCount(){
    //     setCount(c => c+1);
    // }
    // function subtrackCount(){
    //     setCount(c => c-1);
    // }
    
    // function changeColor(){
    //     setColor(c => c === "green" ? "red" : "green");
    // }
    
    // return(<>
    //     <p style={{color: color}}>Count: {count}</p>
    //     <button onClick={addCount}>Add</button>
    //     <button onClick={subtrackCount}>Subtrack</button><br/>
    //     <button onClick={changeColor}>Change Color</button>
    //     </>
    // );

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("event listener added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("event listener removed");
        }
    },[]);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    },[width, height]);

   

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
    </>);


}
export default MyComponent_UseEffect