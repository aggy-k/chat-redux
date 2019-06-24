// TODO: add and export your own actions
// import messages from '../../messages';

const URL = 'https://wagon-chat.herokuapp.com/react-test-236/messages';

export const SET_MESSAGES = 'SET_MESSAGES';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

export function setMessages() {
  const promise = fetch(URL).then(res => res.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function sendNewMessage(message) {
  const body = {author: 'Aggy', content: message}
  const promise = fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());

  return {
    type: SEND_NEW_MESSAGE,
    payload: promise
  }
}
