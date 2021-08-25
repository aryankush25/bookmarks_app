import React from 'react';

import img1 from '../../assets/images/Group 17@3x.png';

import './styles.scss';
import SharedInput from '../shared/SharedInput';

export default function Home() {
  return (
    <div className="header-container">
      <div className="main">
        <section>
          <form action="">
            <h1 className="add-quick">Add Quick" Link</h1>

            <SharedInput label="URL" className="url-input" />

            <SharedInput label="Folder" className="folder-input" />

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
