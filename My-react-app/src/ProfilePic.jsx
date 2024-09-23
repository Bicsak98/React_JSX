function ProfilePicture(){
    const imgUrl = './src/assets/Office.png';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick = {(e) => handleClick(e)} src = {imgUrl}></img>);
}

export default ProfilePicture