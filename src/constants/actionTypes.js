import constants from 'flux-constants';

const syncActionTypes = [
  'SET_LOGIN_USER',
  'CLEAR_SEARCH_FRIEND_RESULT',
];

const basicAsyncActionTypes = [
  'LOGIN',
  'LOGOUT',
  'INITIAL_APP',
  'REGISTER_WEBSOCKET',
  'REGISTER_USER',
  'GET_USER_BY_ID',
  'GET_USER_BY_ACCOUNT',
  'GET_FRIENDS',
  'GET_MESSAGES',
  'GET_MEMBER_DETAIL',
  'ADD_MESSAGE',
  'CREATE_EVENT',
  'JOIN_EVENT',
  'LEAVE_EVENT',
  'APPROVE_INVITE_FRIEND',
  'INVITE_FRIEND',
  'REJECT_INVITE_FRIEND',
  'INIT_USERNAME',
  'VALID_MEMBER',
  'UPDATE_PROFILE',
  'REJECT_MEMBER_BY_ADMIN',
  'DELETE_FRIEND',
  'ADD_MESSAGE_BY_WEBSOCKET',
  'INVITE_FRIEND_BY_WEBSOCKET',
  'REJECT_FRIEND_BY_WEBSOCKET',
  'APPROVE_FRIEND_BY_WEBSOCKET',
  'CREATE_EVENT_BY_WEBSOCKET',
  'UPDATE_EVENT_BY_WEBSOCKET',
];

const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`
  ];
}, []);

export default constants([...asyncActionTypes, ...syncActionTypes]);