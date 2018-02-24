export default function post(state = [], action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.data;
    default:
      return state;
  }
}
