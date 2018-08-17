export function getCorrectTranslatedString(locale, translatedString) {

    let references = {
        "fr": translatedString.fr,
        "en": translatedString.en
    };
    let string;

    for (let index in references) {
        if (index === locale) {
            string = references[index];
        }
    };

    return string;
}