// import NEW_MESSAGE from '../../actions';

export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case "SEND_NEW_MESSAGE":
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
