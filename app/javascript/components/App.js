import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
       React App says: {this.props.greeting}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
