import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      torreProfile: {},
      linkedInProfile: {},
      mergedProfile: {}
    };
  }

  componentWillMount() {
    this.props.torreActions.getTorreProfile('olivierspet');
  }

  handleConfirmation = () => {
    this.setState({ popUp: {
      message: this.props.errorMessage || this.state.popUp.message,
      open: true
    }});
  };

  render() {
    return (
      <div>
        <img src={ this.props.torreProfile.picture } width="150"/>
        <h1>Hello, my name is { this.props.torreProfile.name }</h1>
        <h2>{ this.props.torreProfile.professionalHeadline }</h2>
      </div>
    );
  }
}

Profile.propTypes = {
  torreProfile: PropTypes.object.isRequired,
  torreActions: PropTypes.shape(),
  linkedinActions: PropTypes.shape()
};

export default Profile;
