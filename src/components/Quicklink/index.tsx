import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
import {
  requestAccessFolder,
  requestCreateBookmark
} from '../../store/actions/userActions';
import StoreState from '../../store/utils/StoreTypes';
import img1 from '../../assets/images/Group 17@3x.png';

import './styles.scss';
import SharedInput from '../shared/SharedInput';

const ValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>{children}</components.ValueContainer>
);

const IndicatorsContainer = (props) => {
  return (
    <div style={{ background: '#6870C5' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessFolder());
  }, []);

  const folders = useSelector((state: StoreState) => {
    return state.userData.folders;
  });

  const options = folders.map((folder) => ({
    value: folder.id,
    label: folder.name
  }));
  console.log('options', options);
  const [url, setUrl] = useState('');
  const [folder, setFolder] = useState('');

  function handleChangeUrl(e) {
    setUrl(e.target.value);
    console.log('setUrl', url);
  }

  function handleChangeFolder(e) {
    console.log('e', e);
    setFolder(e);
    console.log('setFolder', folder);
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(requestCreateBookmark(url, folder));
    setUrl('');
    setFolder('');
  }
  const spinner = useSelector(
    (state: StoreState) => state.userData.loginSpinner
  );

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

            <label>Folder</label>
            <br />
            <Select
              styles={{
                control: (base, state) => ({
                  ...base,
                  background: '#6870C5',
                  border: state.isFocused ? 0 : 0,
                  // This line disable the blue border
                  boxShadow: state.isFocused ? 0 : 0,
                  '&:hover': {
                    border: state.isFocused ? 0 : 0
                  }
                  // color: 'white'
                }),
                indicatorSeparator: () => {},
                dropdownIndicator: (defaultStyles) => ({
                  ...defaultStyles,
                  '& svg': { display: 'none' }
                  // backgroundColor: '#6870C5'
                }),
                input: (base) => ({
                  ...base,
                  color: '#fff'
                }),
                placeholder: (defaultStyles) => {
                  return {
                    ...defaultStyles,
                    color: '#ffffff',
                    display: 'none'
                  };
                },
                singleValue: (base) => ({ ...base, color: 'white' }),
                valueContainer: (base) => ({
                  ...base,
                  backgroundColor: '#6870C5'
                })
              }}
              components={{ ValueContainer, IndicatorsContainer }}
              className="select-folder-input"
              value={folder}
              onChange={handleChangeFolder}
              options={options}
            />

            {spinner && (
              <button
                style={{ background: 'grey' }}
                className="btn"
                type="submit">
                <i className="fa fa-refresh fa-spin"></i> Saving
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
