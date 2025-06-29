const formatTime = (date: Date) => {
    const hrs = date.getHours();
    const min = date.getMinutes();

    const am = hrs < 12;

    return `It's ${hrs > 12 ? hrs - 12 : hrs}:${min < 10 ? `0${min}` : min} ${am ? "AM" : "PM"}.`;
}

const formatGreeting = (date: Date) => {
    let greeting = "Good morning!";
    const hrs = date.getHours();

    if (hrs >= 18 || hrs <= 4) {
        greeting = "Good evening!"
    } else if (hrs >= 12) {
        greeting = "Good afternoon!"
    }

    return greeting;
}

const formatRoutineDay = (date: Date) => {
    const day = date.toLocaleString("en-us", { weekday: "long" });
    return day;
}

const checkDate = (date1: Date, date2: Date) => {
    return date1.setHours(0, 0, 0, 0) === date2.setHours(0, 0, 0, 0);
}

export { checkDate, formatGreeting, formatRoutineDay, formatTime };

