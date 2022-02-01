import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { getDragonsFromAPI } from '../../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsData = useSelector((state) => state.dragons);
  const getDragons = () => {
    if (dragonsData.length === 0) {
      dispatch(getDragonsFromAPI());
    }
  };
  useEffect(() => {
    getDragons();
  }, []);

  return (
    <div className="dragons-list">
      {
dragonsData.map((dragon) => (
  <div key={dragon.id} className="dragon">
    <div className="dragon-img">
      <img src={dragon.dragon_img} alt={dragon.dragon_name} />
    </div>
    <div className="dragon-description">
      <h3>{dragon.dragon_name}</h3>
      <p>{dragon.dragon_description}</p>
      <Button variant="primary">Reserve Dragon</Button>
    </div>
  </div>
))
}
    </div>
  );
};

export default Dragons;
