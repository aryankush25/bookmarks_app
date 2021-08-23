import React from 'react';

import './styles.scss';
import img1 from '../../assets/images/Group 17@3x.png';

export default function Home() {
  return (
    <div className="header-container">
      <div className="main">
        <section>
          <form action="">
            <h1 className="addquick">Add Quick Link</h1>
            <label>URL</label>
            <input
              id="disable-select"
              className="first"
              type="text"
              name="url"
            />

            <label>FOLDER</label>
            <br />
            <input
              id="disable-select"
              className="second"
              type="text"
              name="folder"
            />
            <br />

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
