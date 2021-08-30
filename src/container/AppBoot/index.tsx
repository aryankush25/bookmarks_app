import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import history from '../../utils/history';
import ReduxStore, { persistor } from '../../store';
import AppRoutes from '../../routes';

import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={ReduxStore}>
      {/* PersistGate delays the rendering of the app UI till the persisted state has been retrieved and saved to redux */}
      <PersistGate loading={null} persistor={persistor}>
        <div className="app-container">
          {/* Used to preserve previous component path */}
          <ConnectedRouter history={history}>
            <AppRoutes />
          </ConnectedRouter>
        </div>

        {/* react-toastify is used to add notifications */}
        <ToastContainer
          autoClose={3000}
          position="bottom-left"
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          draggable
          pauseOnHover={false}
        />
      </PersistGate>
    </Provider>
  );
}

export default App;
