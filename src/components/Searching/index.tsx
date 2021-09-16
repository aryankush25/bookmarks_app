import React from 'react';
import './styles.scss';
import img from '../../assets/images/btn_Filter@3x.png';
import img2 from '../../assets/images/Group 9@3x.png';
import menu from '../../assets/images/menu.png';
import list from '../../assets/images/list.png';
function Searching() {
  return (
    <div className="searching-bookmark">
      <div className="input-wrapper">
        <input id="stuff" placeholder="Search.." />
        <label className="fa fa-search input-icon"></label>
        <button className="btn">
          <img className="add-icon" src={img} alt="Not Found"></img>
        </button>

        <button
          style={{
            borderRadius: '12px',
            border: '1px solid #6A87E6',
            backgroundColor: 'white',
            padding: '17px 17px',
            marginLeft: '390px'
          }}>
          <img src={img2} alt="Not"></img>
        </button>

        <button
          style={{
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
            padding: '20px 20px',
            backgroundColor: '#f1f1f1',
            marginLeft: '10px',
            border: '1px solid white',
            justifyContent: 'center',
            fontSize: '20px'
          }}>
          <img
            style={{
              height: '100%',
              width: '100%'
            }}
            src={menu}
            alt="Not Found"></img>
        </button>
        <button
          style={{
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            padding: '20px 20px',
            backgroundColor: '#5F8FE3',
            border: '1px solid white',
            justifyContent: 'center',
            fontSize: '20px'
          }}>
          <img
            style={{
              height: '100%',
              width: '100%'
            }}
            src={list}
            alt="NotFound"></img>
        </button>
      </div>
    </div>
  );
}

export default Searching;
