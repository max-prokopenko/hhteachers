import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class StartShift extends React.Component {
  navigateToPage = () => {
  	
  };

  render() {
    return (
      <FlatButton label="Start shift" primary={true} onClick={this.navigateToPage} />
    );
  }
}

StartShift.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StartShift;