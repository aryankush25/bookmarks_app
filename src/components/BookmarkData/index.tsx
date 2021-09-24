import { divide, indexOf } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import spinner from '../../assets/images/spinner.gif';
import threeIcon from '../../assets/images/threeIcon.png';
import {
  requestAccessBookmarkDefault,
  requestDeleteBookmark
} from '../../store/actions/userActions';
import StoreState from '../../store/utils/StoreTypes';
import BookmarkMenu from '../BookmarkMenu';
import './style.scss';

function BookmarkData() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);

    dispatch(requestAccessBookmarkDefault());
  }, []);

  const bookmarks = useSelector((state: StoreState) => {
    return state.userData.bookmarks;
  });

  // function deleteBookmark(index) {
  //   console.log('clicked On delete bookmark', index);
  //   return dispatch(requestDeleteBookmark(singleBookmark[index]));
  // }

  const foldersBookmark = useSelector((state: StoreState) => {
    // console.log('state', state);
    // console.log('typeofState', typeof state.userData.folderData);
    return state.userData.folderData;
  }) as any[]; //TypeCasting Here

  // console.log('foldersBookmark', foldersBookmark);
  const toggle = foldersBookmark.length === 0;

  const loader = useSelector(
    (state: StoreState) => state.userData.bookmarkLoader
  );

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
              <div className="bookmark-container">
                <div className="bookmark-content">
                  <h2 style={{ padding: '5px 5px' }}>{bookmark.name}</h2>
                  <h3>{bookmark.description}</h3>
                </div>
                <div className=" bookmark-menu">
                  <BookmarkMenu bookmarks={bookmark} />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        bookmarks.map((bookmark, index) => (
          <div key={index}>
            <div className="card-section">
              <img className="bookmark-image" src={bookmark.imageUrl} alt="" />
              <div className="bookmark-container">
                <div className="bookmark-content">
                  <h2 style={{ padding: '5px 5px' }}>{bookmark.name}</h2>
                  <h3>{bookmark.description}</h3>
                </div>
                <div className=" bookmark-menu">
                  <BookmarkMenu bookmarks={bookmarks} />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookmarkData;
