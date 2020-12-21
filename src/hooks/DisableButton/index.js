import { useDispatch, useSelector } from 'react-redux';
import {
  nominationSelector,
  reachedFiveNominees,
  underFiveNominees
} from '../../redux/slices/nomination';

const useDisableButton = () => {
  const { films } = useSelector(nominationSelector);
  const dispatch = useDispatch();

  if (films.length === 5) {
    return dispatch(reachedFiveNominees())
  }
  return dispatch(underFiveNominees())
};

  const disableButton = (film) => {
    if (films.length === 5 || film.nomination === true) {
      return true;
    }
    return false;
  };

export { useDisableButton };
