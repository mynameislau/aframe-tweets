export const ADD_TWEET = 'ADD_TWEET';


export const addTweet = data => ({
  type: ADD_TWEET,
  payload: {
    data
  }
});
