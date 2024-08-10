// import { divide, indexOf } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import spinner from '../../assets/images/spinner.gif';

import { requestAccessBookmarkDefault } from '../../store/actions/userActions';
import StoreState from '../../store/utils/StoreTypes';
import BookmarkMenu from '../BookmarkMenu';
import './style.scss';

function BookmarkData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessBookmarkDefault());
  }, []);

  const bookmarks = useSelector((state: StoreState) => {
    return state.userData.bookmarks;
  }) as any[]; //root

  const foldersBookmark = useSelector((state: StoreState) => {
    return state.userData.folderData;
  }) as any[];
  const toggle = foldersBookmark.length === 0;

  const folder = useSelector((state: StoreState) => {
    return state.userData.userData;
  });
  console.log('folder', folder);

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
                  <BookmarkMenu bookmark={bookmark} />
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
                  <BookmarkMenu bookmark={bookmark} />
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
