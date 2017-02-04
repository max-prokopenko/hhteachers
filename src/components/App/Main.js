import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class MainActivity extends React.Component {
  navigateToPage = () => {
    this.context.router.push('/login')
  };

  render() {
    return (
      <FlatButton label="Start shift" primary={true} onClick={this.navigateToPage} />
    );
  }
}

ButtonLogin.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainActivity;