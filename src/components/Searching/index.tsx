import React, { useState } from 'react';
import './styles.scss';
import img from '../../assets/images/btn_Filter@3x.png';
import img2 from '../../assets/images/Group 9@3x.png';
import grid from '../../assets/images/menuuu@2x.png';
import dark from '../../assets/images/dark@2x.png';
import list from '../../assets/images/list (1)@2x.png';
import listImg from '../../assets/images/listview@2x.png';
function Searching({ view, setView }) {
  const [buttonState1, setbuttonState1] = useState(true);
  const [buttonState, setbuttonState] = useState(false);

  function changeView() {
    return setView(false);
  }
  function changegridView() {
    return setView(true);
  }
  return (
    <div className="searching-bookmark">
      <div className="input-wrapper">
        <input id="stuff" placeholder="Search.." />
        <label className="fa fa-search input-icon"></label>
        <button className="btn">
          <img className="add-icon" src={img} alt="Not Found"></img>
        </button>

        <button className="add-link">
          <img src={img2} alt="Not"></img>
        </button>

        <button className={buttonState1 ? 'gridview-true' : 'grid-view'}>
          <img
            src={buttonState ? dark : grid}
            alt="Not Found"
            onClick={() => {
              changegridView();
              setbuttonState(false);
              setbuttonState1(true);
            }}></img>
        </button>
        <button className={buttonState ? 'listview-true ' : 'list-view'}>
          <img
            src={buttonState1 ? list : listImg}
            alt="NotFound"
            onClick={() => {
              changeView();
              setbuttonState(true);
              setbuttonState1(false);
            }}></img>
        </button>
      </div>
    </div>
  );
}

export default Searching;
