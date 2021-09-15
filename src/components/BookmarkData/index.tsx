import { divide } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import spinner from '../../assets/images/spinner.gif';
import {
  requestAccessBookmark,
  requestAccessBookmarkFailure,
  requestAccessBookmarkSuccess,
  requestAccessFolderDataSuccess
} from '../../store/actions/userActions';
import StoreState from '../../store/utils/StoreTypes';
import './style.scss';

function BookmarkData() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(requestAccessBookmark());
  }, [dispatch]);
  const bookmarkss = useSelector((state: StoreState) => {
    // console.log('state', state);
    return state.userData.bookmarks;
  });
  // console.log('boookmarks', bookmarkss);
  return (
    <div className="wrraper">
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <img src={spinner} alt="loading" />
        </div>
      ) : (
        bookmarkss.map((bookmak, index) => (
          <div key={index}>
            <div className="card-section">
              <img className="bookmark-image" src={bookmak.imageUrl} alt="" />
              <h2 style={{ padding: '5px 5px' }}>{bookmak.name}</h2>
              <h3>{bookmak.description}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookmarkData;
