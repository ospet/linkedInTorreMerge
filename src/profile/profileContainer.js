import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import profile from './profile';
import * as torreActions from '../redux/torre/torreActions';

const mapStateToProps = state => ({
  torreProfile: state.torre.torreProfile
});

const mapDispatchToProps = dispatch => ({
  torreActions: bindActionCreators(torreActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
