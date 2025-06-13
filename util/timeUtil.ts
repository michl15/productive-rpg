const formatTime = (date: Date) => {
    const hrs = date.getHours();
    const min = date.getMinutes();

    const am = hrs < 12;

    return `It's ${hrs > 12 ? hrs - 12 : hrs}:${min < 10 ? `0${min}` : min} ${am ? "AM" : "PM"}.`;
}

const formatGreeting = (date: Date) => {
    let greeting = "Good morning!";
    const hrs = date.getHours();

    if (hrs >= 18) {
        greeting = "Good evening!"
    } else if (hrs >= 12) {
        greeting = "Good afternoon!"
    }

    return greeting;
}
export { formatGreeting, formatTime };

