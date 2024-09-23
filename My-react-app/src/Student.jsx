import PropType from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.PropType = {
    name: PropType.string,
    age: PropType.number,
    isStudent: PropType.bool
}

Student.defaultProps = {
    name: "Guest",
    age : 30,
    isStudent: false
}
export default Student