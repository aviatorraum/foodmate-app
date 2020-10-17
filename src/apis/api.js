import { getUrl } from './libs/route';
import {
  fetchWithoutToken,
  fetchGetWithToken,
  fetchPostWithToken,
} from './libs/fetch';

export const getRoomsResult = (customHeaders, payload) =>
  fetchGetWithToken(getUrl('rooms'), customHeaders, payload);

export const getFriendsResult = (customHeaders, payload) =>
  fetchGetWithToken(getUrl('friends'), customHeaders, payload);

export const getMessagesResult = (customHeaders, { roomId, ...payload }) =>
  fetchGetWithToken(getUrl(`messages/${roomId}`), customHeaders, payload);

export const getUserByIdResult = (customHeaders, { userId }) =>
  fetchGetWithToken(getUrl(`users/${userId}`), customHeaders);

export const addMessageResult = (customHeaders, { roomId, ...payload }) =>
  fetchPostWithToken(getUrl(`messages/${roomId}`), customHeaders, payload);

export const inviteFriendResult = (customHeaders, { userId }) =>
  fetchPostWithToken(getUrl(`friends/invite/${userId}`), customHeaders);

export const rejectInviteFriendResult = (customHeaders, { friendId }) =>
  fetchPostWithToken(getUrl(`friends/reject/${friendId}`), customHeaders);

export const loginResult = async (payload) => {
  try {
    const resp = await fetchWithoutToken(getUrl('login'), 'POST', payload);

    const { ok, result } = resp;
    if (!ok) {
      const error = new Error(result.error_description);
      throw error;
    }
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getTokenResult = async (payload) => {
  try {
    const resp = await fetchWithoutToken(getUrl('v1/login'), 'POST', payload);
    const { ok, result } = resp;
    if (!ok) {
      const error = new Error(result.error_description);
      throw error;
    }

    return resp;
  } catch (error) {
    throw error;
  }
};
