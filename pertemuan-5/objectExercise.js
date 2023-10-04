let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming["difficulty"] = 7;

delete programming.jokes;

programming.isFun = true;

programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);

console.log(programming.languages);