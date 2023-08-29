//This will capitalize the first letter of a string and lowercase the rest of the string. It will also format the titles of the movies and shows so that they are more readable. For example, the title "the-matrix" will be formatted as "The Matrix".
export const capitalize = (text) => text[0].toUpperCase() + text.substrin(1).toLowerCase();

//This will format titles to be capitalized and have spaces between words. For example, the title "the-matrix" will be formatted as "The Matrix".
export const formatTitles = (text) => {
    const words = text.split('-');
    const capitalizedWords = words.map((word) => capitalize(word));
    return capitalizedWords.join(' ');
    };