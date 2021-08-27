import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCreateBookmark } from '../../store/actions/userActions';
import StoreState from '../../store/utils/StoreTypes';
import img1 from '../../assets/images/Group 17@3x.png';

import './styles.scss';
import SharedInput from '../shared/SharedInput';
import Loading from './Loader';
import { stat } from 'fs';

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
  const spinner = useSelector(
    (state: StoreState) => state.userData.loginSpinner
  );
  console.log('spinner', spinner);
  return (
    <div className="header-container">
      {/* <Loading spinnerEnable={spinner} /> */}
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

            {spinner && (
              <button
                style={{ background: 'grey' }}
                className="btn"
                type="submit">
                Saving
              </button>
            )}

            {!spinner && (
              <button className="btn" type="submit">
                save
              </button>
            )}
          </form>
        </section>
        <div className="right">
          <img src={img1} alt="" className="img-container" />
        </div>
      </div>
    </div>
  );
}
