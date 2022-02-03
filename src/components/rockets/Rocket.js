/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved, setCancellation } from '../../redux/rockets/rockets';

const Rockets = (props) => {
  const {
    id, rocket_name, description, flickr_images, reserved,
  } = props;

  const dispatch = useDispatch();

  const newReservetion = () => {
    dispatch(setReserved(id));
  };

  const cancelReservetion = () => {
    dispatch(setCancellation(id));
  };

  return (
    <div key={id} className="rocket-item">
      <div className="rocket-img">
        <img src={flickr_images} alt="flickr_images" />
      </div>
      <div className="rocket-description">
        <h2>{rocket_name}</h2>
        <p>
          <span className={reserved === true ? 'btn btn-primary btn-sm' : 'button-reserverd'}>
            { reserved === true ? 'Reserved' : ''}
          </span>
          {description}
        </p>
        <button type="button" className={reserved === true ? 'btn btn-dark' : 'btn btn-primary'} onClick={reserved === true ? cancelReservetion : newReservetion}>{reserved === true ? 'Cancel Booking' : 'reserved rocket'}</button>
      </div>

    </div>
  );
};

Rockets.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rockets;
