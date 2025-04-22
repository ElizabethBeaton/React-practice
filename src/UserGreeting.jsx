// conditional rendering

import PropTypes from "prop-types";

function UserGreeting({isLoggedIn = false, userName = "Guest"}) {

  const welcomeMessage = <h2 className="welcome-message">Welcome {userName}</h2>
  const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
  
  return isLoggedIn ? welcomeMessage : loginPrompt ;
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
}


export default UserGreeting;
