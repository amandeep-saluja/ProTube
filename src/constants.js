export const API_KEY = 'AIzaSyACs5JImPBP-T6ddvE1vkVaT0g9VDYPqSU';

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API_DETAILED = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;

export const YOUTUBE_RECOMMENDED_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${API_KEY}&id=`;

export const YOUTUBE_COMMENTD = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${API_KEY}&videoId=`;

export const LIVE_MESSAGE_SPLICE = 20;