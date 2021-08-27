import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { requestUserRequest } from '../../store/actions/userActions';

export const useLoginHook = () => {
  const dispatch = useDispatch();

  const signInRequestHandler = useCallback(
    (params) => {
      const email = params.email;
      const password = params.password;
      dispatch(requestUserRequest(email, password));
    },
    [dispatch]
  );

  return { signInRequestHandler };
};
