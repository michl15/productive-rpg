const formatTime = (date: Date) => {
    const hrs = date.getHours();
    const min = date.getMinutes();
    let greeting = "Good morning";

    const am = hrs < 12;
    if (hrs >= 18) {
        greeting = "Good evening"
    } else if (hrs >= 12) {
        greeting = "Good afternoon"
    }
    return `${greeting}! It's ${hrs > 12 ? hrs - 12 : hrs}:${min} ${am ? "AM" : "PM"}`;
}

export { formatTime };
