import { divide } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import spinner from '../../assets/images/spinner.gif';
import { requestAccessBookmarkDefault } from '../../store/actions/userActions';
import StoreState from '../../store/utils/StoreTypes';
import './style.scss';

function BookmarkData() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(requestAccessBookmarkDefault());
  }, [dispatch]);
  const bookmarks = useSelector((state: StoreState) => {
    return state.userData.bookmarks;
  });

  const foldersBookmark = useSelector((state: StoreState) => {
    console.log('state', state);
    console.log('typeofState', typeof state.userData.folderData);
    return state.userData.folderData;
  }) as any[]; //TypeCasting Here

  console.log('foldersBookmark', foldersBookmark);
  const toggle = foldersBookmark.length === 0;

  const loader = useSelector(
    (state: StoreState) => state.userData.bookmarkLoader
  );
  console.log('toggle', toggle);
  return (
    <div className="wrraper">
      {loader ? (
        <div style={{ textAlign: 'center' }}>
          <img src={spinner} alt="loading" />
        </div>
      ) : !toggle ? (
        foldersBookmark.map((bookmark, index) => (
          <div key={index}>
            <div className="card-section">
              <img className="bookmark-image" src={bookmark.imageUrl} alt="" />
              <h2 style={{ padding: '5px 5px' }}>{bookmark.name}</h2>
              <h3>{bookmark.description}</h3>
            </div>
          </div>
        ))
      ) : (
        bookmarks.map((bookmark, index) => (
          <div key={index}>
            <div className="card-section">
              <img className="bookmark-image" src={bookmark.imageUrl} alt="" />
              <h2 style={{ padding: '5px 5px' }}>{bookmark.name}</h2>
              <h3>{bookmark.description}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookmarkData;
