 const fetchLikes = async (mealId) => {
    const likesResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZhONSl9aYWRYlvF8F2h3/likes/?item_id=${mealId}`);
    return await likesResponse.json();
  }

  export default fetchLikes;