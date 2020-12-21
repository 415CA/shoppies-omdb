import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nominationSelector, removeNomination } from '../../../redux/slices/nomination';

const Banner = () => {
  const { films } = useSelector(nominationSelector);
  const dispatch = useDispatch();

  return (
    <div>
      You have reached 5 nominations
    </div>
  )
}

export default Banner;
