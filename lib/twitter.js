const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: 'eRJpyXEh6m5L7gN75xCkyZFl3',
  appSecret: 'szhe3G7VzpmJcciUpGn7fmOmOPs93vQkb7pH3ipo1C6CggQxbT',
  accessToken: '2030018328715251712-MJZ9zkAQMO6k8igapmhgAwlQTbtF6A',
  accessSecret: 'H1ksM71DZwvXL4zY2WhqWIuddKhXv6QZeqWRH8RKihZWe',
});

async function postTweet(text) {
  try {
    const tweet = await client.v2.tweet(text);
    console.log('Tweet posted:', tweet.data.id, tweet.data.text);
    return tweet.data.id;
  } catch (err) {
    console.error('Error:', err.data || err.message);
    throw err;
  }
}

const args = process.argv.slice(2);
if (args.length > 0) {
  postTweet(args.join(' '));
}

module.exports = { postTweet };
