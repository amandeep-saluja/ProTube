export const parseViews = (views) => {
    if (views < 1000) return Math.abs(Number(views / 1000)).toFixed(1) + ' views';
    if (views > 1000 && views < 1000000) return Math.floor(Number(views / 1000)) + 'K views';
    if (views > 1000000 && views < 1000000000) return Math.abs(Number(views / 1000000)).toFixed(1) + 'M views';
    return Math.abs(Number(views / 1000000000)).toFixed(1) + 'B views';
};

export const parseDate = (publishDate) => {
    const publishDateDiff = (Date.now() - Date.parse(publishDate)) / 86400000;
    if (publishDateDiff < 30) {
        return Math.floor(publishDateDiff) + ' days ago';
    }
    if (publishDateDiff > 30 && publishDateDiff / 30 < 12) {
        return Math.floor(publishDateDiff / 30) + ' months ago';
    }

    return Math.floor(publishDateDiff / 360) + ' years ago';
};

export const parseLikes = (likeCount) => {
    if (likeCount < 1000) return Math.abs(Number(likeCount / 1000)).toFixed(1);
    if (likeCount > 1000 && likeCount < 1000000) return Math.floor(Number(likeCount / 1000)) +'K';
    if (likeCount > 1000000 && likeCount < 1000000000) return Math.abs(Number(likeCount / 1000000)).toFixed(1) + 'M';
    return Math.abs(Number(likeCount / 1000000000)).toFixed(1)+'B';
};
