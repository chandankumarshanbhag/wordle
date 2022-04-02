import wordOfTheDay from "./word_of_the_day.json";

export function pickTodaysWord(){
    let day = (date => {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
     })(new Date())
     return wordOfTheDay[day]?.toUpperCase();
}