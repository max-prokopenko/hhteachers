import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class ButtonLogin extends React.Component {
  navigateToPage = () => {
    this.context.router.push('/login')
  };

  render() {
    return (
      <FlatButton label="Login" primary={true} onClick={this.navigateToPage} />
    );
  }
}

ButtonLogin.contextTypes = {
  router: React.PropTypes.object.isRequired
}