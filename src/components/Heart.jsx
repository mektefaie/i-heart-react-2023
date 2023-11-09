import PropTypes from 'prop-types';
import heartLogo from '../assets/heart.svg';

Heart.propTypes = {
  msg: PropTypes.string.isRequired,
};

function Heart(props) {
  return (
    <div className='heart'>
      <img className='heart-img' src={heartLogo} alt='heart' />
      <p className='heart-message'>{props.msg}</p>
    </div>
  );
}

export default Heart;
