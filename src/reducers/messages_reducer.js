import { SET_MESSAGES, SEND_NEW_MESSAGE } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case SEND_NEW_MESSAGE:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  };
}
