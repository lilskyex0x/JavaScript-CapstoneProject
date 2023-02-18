const postLike = async (mealId) => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZhONSl9aYWRYlvF8F2h3/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: mealId,
        likes: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    });
  };
  
  export default postLike;