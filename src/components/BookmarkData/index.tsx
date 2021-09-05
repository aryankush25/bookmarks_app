import { divide } from 'lodash';
import React, { useEffect, useState } from 'react';

import spinner from '../../assets/images/spinner.gif';
import './style.scss';

function BookmarkData() {
  const [bookmarks, setBookmark] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://bookmarks-app-server.herokuapp.com/folder-bookmarks', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzYjY2LWZiMTAtNDkxMC1hNDRhLTZjYWIwZjU2ZTYyZCIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiZXhwIjoxNjM0OTY4NDQwLCJpYXQiOjE2Mjk3ODQ0NDB9.C4w_VXqaFLeab3eATiP-TxIPGjSMBJfFyAFxzyBYqqo'}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookmark(data);
        console.log('bookmarks', bookmarks);
        setLoading(false);
      });
  }, []);
  //   console.log('bookmarks', bookmarks);
  return (
    <div className="wrraper">
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <img src={spinner} alt="loading" />
        </div>
      ) : (
        bookmarks.map((bookmak, index) => (
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
