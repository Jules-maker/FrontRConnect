const setVisitedWebSite = () => {
    const date = new Date();
    // Set the expiration date to 1 year
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 365);
    document.cookie = `visited=true; expires=${date.toUTCString()}; path=/`;
}


const isFirstVisite = (): boolean => {
    const cookies = document.cookie;
    if (!cookies.includes("visited=true")) {
        console.log("First visit");
        return true;
    }
    return false;

}

export { setVisitedWebSite, isFirstVisite };