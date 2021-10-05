import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  requestAccessBookmarkDefault,
  requestDeleteBookmark,
  requestEditBookmark
} from '../../store/actions/userActions';

import './styles.scss';

import fav from '../../assets/images/heart@2x.png';
import oval from '../../assets/images/Oval@2x.png';
import copy from '../../assets/images/copy@2x.png';
import pen from '../../assets/images/pen@2x.png';
import folderImg from '../../assets/images/foldergroup@2x.png';
import tagImg from '../../assets/images/tagss@2x.png';
import deleteIcon from '../../assets/images/delete@2x.png';
import StoreState from '../../store/utils/StoreTypes';

function BookmarkListView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestAccessBookmarkDefault());
  }, []);
  const bookmarks = useSelector((state: StoreState) => {
    return state.userData.bookmarks;
  });

  const foldersBookmark = useSelector((state: StoreState) => {
    return state.userData.folderData;
  }) as any[];

  function handleDelete(id) {
    dispatch(requestDeleteBookmark(id));
  }

  function handleEdit() {
    dispatch(requestEditBookmark);
  }

  const toggle = foldersBookmark.length === 0;

  return !toggle ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around'
      }}>
      {foldersBookmark.map((bookmark) => (
        <div className="list-container">
          <img className="oval" src={oval} alt="Not-found" />
          <div className="bookmarkList-container">
            <div className="image-container">
              <img
                className="image-list"
                src={bookmark.imageUrl}
                alt="Not Found"
              />
            </div>
            <div className="content-container">
              <h2
                className="bookmark-name"
                // style={{
                //   padding: '5px 5px',
                //   fontWeight: 'normal',
                //   fontSize: '16px'
                // }}
              >
                {bookmark.name}
              </h2>
              <h3 className="bookmark-description">{bookmark.description}</h3>
            </div>
          </div>
          <div className="bookmark-folder">
            <img
              src={folderImg}
              style={{ height: '20', width: '194' }}
              alt="Not Found"
            />
          </div>
          <div className=" tags">
            <img
              style={{ height: '58', width: '151' }}
              src={tagImg}
              alt="Not Found"
            />
          </div>
          <div className="bookmark-icons">
            <img src={fav} alt="Not-found" />
            <img src={copy} alt="Not-found" />
            <img src={pen} onClick={handleEdit} alt="Not-found" />
            <img
              src={deleteIcon}
              onClick={() => handleDelete(1)}
              alt="Not-found"
            />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around'
      }}>
      {bookmarks.map((bookmark) => (
        <div className="list-container">
          <img className="oval" src={oval} alt="Not-found" />
          <div className="bookmarkList-container">
            <div className="image-container">
              <img
                className="image-list"
                src={bookmark.imageUrl}
                alt="Not Found"
              />
            </div>
            <div className="content-container">
              <h2
                className="bookmark-name"
                // style={{
                //   padding: '5px 5px',
                //   fontWeight: 'normal',
                //   fontSize: '16px'
                // }}
              >
                {bookmark.name}
              </h2>
              <h3 className="bookmark-description">{bookmark.description}</h3>
            </div>
          </div>
          <div className="bookmark-folder">
            <img
              src={folderImg}
              style={{ height: '20', width: '194' }}
              alt="Not Found"
            />
          </div>
          <div className=" tags">
            <img
              style={{ height: '58', width: '151' }}
              src={tagImg}
              alt="Not Found"
            />
          </div>
          <div className="bookmark-icons">
            <img src={fav} alt="Not-found" />
            <img src={copy} alt="Not-found" />
            <img src={pen} onClick={() => handleEdit()} alt="Not-found" />
            <img
              src={deleteIcon}
              onClick={() => handleDelete(bookmark.id)}
              alt="Not-found"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookmarkListView;
