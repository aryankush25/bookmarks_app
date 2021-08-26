import React, { useState } from 'react';

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

  function handleSubmit(e) {
    e.preventDefault();
    // alert(`URL is ${url} and Folder is ${folder}`);
    console.log('Url: ', { url }, 'Folder', { folder });
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
