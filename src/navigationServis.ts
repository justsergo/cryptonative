import {
  NavigationAction,
  StackActions,
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

type Params = Record<string, object | string | undefined | boolean>;

export const navigationRef = createNavigationContainerRef<Params>();

export function navigate(name: string, params?: Params) {
  console.log('1');
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
}

export function replace(name: string, params?: Params) {
  if (navigationRef.isReady() && navigationRef.current) {
    const replaceAction = StackActions.replace(name, params);
    navigationRef.current?.dispatch(replaceAction);
  }
}

export const dispatch = (action: NavigationAction) => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current?.dispatch(action);
  }
};

export const setParams = (params: Params) => {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current?.dispatch(CommonActions.setParams(params));
  }
};
