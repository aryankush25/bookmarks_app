import React from 'react';
import './styles.scss';
import img1 from '../../assets/images/img1.png';
export default function Home() {
  return (
    <div className="banner">
      <div className="main">
        <section>
          <form action="">
            <h1 className="addquick">Add Quick Link</h1>
            <label>URL</label>
            <input type="text" name="url" placeholder=" Url.." />

            <label>FOLDER</label>
            <input type="text" name="folder" placeholder="Folder.." />
            <br />

            <button className="btn" type="submit">
              Save
            </button>
          </form>
        </section>
        <aside className="right">
          <img src={img1} alt="" className="img" />
        </aside>
      </div>
    </div>
  );
}
