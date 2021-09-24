import { RouterState } from 'connected-react-router';

export interface UserDataTypes {
  email: string;
  accessToken: string;
}

export interface UserDataReducerTypes {
  userData: UserDataTypes;
  loginSpinner: boolean;
  folderSpinner: boolean;
  bookmarkLoader: boolean;
  folders: any[];
  bookmarks: any[];
  node: {};
  folderData: any[];
  folderId: string;
}

export default interface StoreState {
  userData: UserDataReducerTypes;
  // loginSpinner: boolean;
  router: RouterState;
}
