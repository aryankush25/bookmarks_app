import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestCreateBookmark } from '../../store/actions/userActions';

import img1 from '../../assets/images/Group 17@3x.png';

import './styles.scss';
import SharedInput from '../shared/SharedInput';

export default function Home() {
  const [url, setUrl] = useState('');
  const [folder, setFolder] = useState('');

  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  function handleChangeFolder(e) {
    setFolder(e.target.value);
  }
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();

    dispatch(requestCreateBookmark(url, folder));
    setUrl('');
    setFolder('');
  }

  return (
    <div className="header-container">
      <div className="main">
        <section>
          <form onSubmit={handleSubmit}>
            <h1 className="add-quick">Add Quick Link</h1>

            <SharedInput
              label="URL"
              className="url-input"
              value={url}
              setFunction={handleChangeUrl}
            />

            <SharedInput
              label="Folder"
              className="folder-input"
              value={folder}
              setFunction={handleChangeFolder}
            />

            <button className="btn" type="submit">
              Save
            </button>
          </form>
        </section>
        <div className="right">
          <img src={img1} alt="" className="img-container" />
        </div>
      </div>
    </div>
  );
}
