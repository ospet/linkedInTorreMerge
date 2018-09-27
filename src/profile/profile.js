import React from 'react';
import PropTypes from 'prop-types';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liCode: '',
      liError: '',
      torrePerson: ''
    };
  }

  componentWillMount() {
    //this.props.torreActions.getTorreProfile('olivierspet');
  }

  handleLISuccess = (data) => {
    console.log(data);
    this.setState(oldState => ({ ...oldState, liCode: data.code, liError: ''}));
    // get access token
    this.props.liActions.getLIToken(data.code);
  }

  handleLIFailure = (error) => {
    this.setState(oldState => ({ ...oldState, liCode: '', liError: error.errorMessage}));
  }

  handleConfirmation = () => {
    this.setState({ popUp: {
      message: this.props.errorMessage || this.state.popUp.message,
      open: true
    }});
  };

  mergedProfiles = () => {
    return {
      name: this.props.torreProfile.name || ( this.props.liProfile ? `${this.props.liProfile.firstName} ${this.props.liProfile.lastName}` : '' ),
      picture: this.props.torreProfile.picture || this.props.liProfile.pictureUrl,
      headline: this.props.torreProfile.professionalHeadline || this.props.liProfile.headline
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  getTorreProfile = () => {
    this.props.torreActions.getTorreProfile(this.state.torrePerson);
  };

  render() {
    let profile = this.props.liProfile ? this.mergedProfiles() : null;
    return (
      <div>
        <div className="lisection">
          <LinkedIn
            clientId="78jfms4mfsz3kk"
            onFailure={this.handleLIFailure}
            onSuccess={this.handleLISuccess}
            redirectUri={`${window.location.protocol}//${window.location.host}/linkedin`}
          >
            <img src={require('../assets/lisignin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
          </LinkedIn>
        </div>
        {
          this.props.liProfile ? (
            <div className="torresection">
              <TextField
                id="torrePerson"
                name="torrePerson"
                label="Your Torre Bio person ID"
                value={this.state.torrePerson}
                onChange={this.handleChange('torrePerson')}
              />
              <Button variant="contained" color="primary" onClick={this.getTorreProfile}>
                Merge Torre Bio
              </Button>
            </div>
          ) : null
        }
        {
          profile ? (
            <div className="biosection">
              <img src={ profile.picture } width="150" alt="Bio picture"/>
              <h1>Hello, my name is { profile.name }</h1>
              <h2>{ profile.headline }</h2>
            </div>
          ) : null
        }
      </div>
    );
  }
}

Profile.propTypes = {
  torreProfile: PropTypes.object.isRequired,
  torreActions: PropTypes.shape(),
  liActions: PropTypes.shape(),
  liProfile: PropTypes.object
};

export default Profile;
