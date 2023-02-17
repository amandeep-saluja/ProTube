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
    if (likeCount > 1000 && likeCount < 1000000) return Math.floor(Number(likeCount / 1000)) + 'K';
    if (likeCount > 1000000 && likeCount < 1000000000) return Math.abs(Number(likeCount / 1000000)).toFixed(1) + 'M';
    return Math.abs(Number(likeCount / 1000000000)).toFixed(1) + 'B';
};

export const commentDateTime = (dateTime) => {
    if (dateTime) {
        const now = new Date().getTime();
        const diffDate = new Date(dateTime).getTime();
        const diff = now - diffDate;

        // 1 year to infinite
        if (diff / (1000 * 60 * 60 * 24 * 30 * 12) > 1)
            return Math.round(diff / (1000 * 60 * 60 * 24 * 30 * 12)) + ' years ago';
        // 1 month to 12 months
        if (diff / (1000 * 60 * 60 * 24 * 30) > 1 && diff / (1000 * 60 * 60 * 24 * 30 * 12) < 12)
            return Math.round(diff / (1000 * 60 * 60 * 24 * 30)) + ' months ago';
        // 1 day to 30 days
        if (diff / (1000 * 60 * 60 * 24) > 1 && diff / (1000 * 60 * 60 * 24 * 30) < 30)
            return Math.round(diff / (1000 * 60 * 60 * 24)) + ' days ago';
        // 1 hr to 24 hr
        if (diff / (1000 * 60 * 60) > 1 && diff / (1000 * 60 * 60 * 12) < 24)
            return Math.round(diff / (1000 * 60 * 60)) + ' hours ago';
        // 1 min to 60 min
        if (diff / (1000 * 60) > 1 && diff / (1000 * 60 * 60) < 60)
            return Math.round(diff / (1000 * 60)) + ' minutes ago';
        // 1 sec to 60 sec
        if (diff / 1000 > 1 && diff / (1000 * 60) < 60) return Math.round(diff / 1000) + ' seconds ago';
    }
};
