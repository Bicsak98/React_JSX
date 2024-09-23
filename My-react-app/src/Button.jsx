
function Button(){
    // const styles = {
    //     backgroundColor: "hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer",
    // }

    // return(<button style={styles}>Click here</button>);

    // let count = 0;

    // const handleClick = (name) => {
    //     if (count <3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);

    //     }else{
    //         console.log(`${name} stop clicking me`);
    //     }

    // }

    // const handleClick = (e) => console.log(e);

    const handleClick = (e) => e.target.textContent = "OUCH! :/";
    
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // return(<button onClick={(e) => handleClick(e)}>Click me :D</button>);

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me :D</button>);
}
export default Button