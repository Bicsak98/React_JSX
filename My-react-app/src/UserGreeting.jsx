import PropTypes from 'prop-types'

function UserGreeting(props){

    const welcomeMessage =  <h2 className="welcome-message">
                                Welcome {props.username}
                            </h2>
    const leaveMessage =    <h2 className="leav-message">
                                Please log in to continue
                            </h2>
    return(props.isLoggedIn ?  welcomeMessage : leaveMessage);

    //    if(props.isLoggedIn){
//     return <h2>Welcome {props.username}</h2>
//    }
//    else{
//     return <h2>Please log in to continue</h2>
//    }
}
UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest"
}

export default UserGreeting