import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <h1>Dragons</h1>
  );
};

export default Dragons;
