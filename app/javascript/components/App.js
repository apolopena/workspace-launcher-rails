import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div class="flex items-center justify-center h-screen">
          <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 animate__animated animate__bounce">
            React App says: {this.props.greeting}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
