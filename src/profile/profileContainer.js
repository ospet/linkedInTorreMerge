import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import profile from './profile';
import * as torreActions from '../redux/torre/torreActions';
import * as liActions from '../redux/linkedin/linkedinActions';

const mapStateToProps = state => ({
  torreProfile: state.torre.torreProfile,
  liProfile: state.li.liProfile
});

const mapDispatchToProps = dispatch => ({
  torreActions: bindActionCreators(torreActions, dispatch),
  liActions: bindActionCreators(liActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
