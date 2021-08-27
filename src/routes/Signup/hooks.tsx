import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { requestUserSignup } from '../../store/actions/userActions';

export const useSignupHook = () => {
  const dispatch = useDispatch();

  const signUpHandler = useCallback(
    (params) => {
      const name = params.name;
      const email = params.email;
      const password = params.password;
      dispatch(requestUserSignup(name, email, password));
    },
    [dispatch]
  );

  return { signUpHandler };
};
