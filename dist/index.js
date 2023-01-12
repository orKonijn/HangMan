"use strict";
console.log("hi");
class Game {
    constructor() {
        this.GetStringFromUser = () => {
            const letter = prompt("guess a letter:");
            if (typeof letter == "string") {
                return letter;
            }
            alert("not good");
            return this.GetStringFromUser();
        };
        this.FindCharLocations = (char, arr) => {
            let locations = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === char)
                    locations.push(i);
            }
            return locations;
        };
        this.BreakTheWordUp = (word) => {
            return word.toLowerCase().split('');
        };
        this.SetCharAt = (str, index, chr) => {
            if (index > str.length - 1)
                return str;
            return str.substring(0, index) + chr + str.substring(index + 1);
        };
        this.MaskString = (str) => {
            return str.replace(/[^\s]/g, "*");
        };
        this.WinCondition = (str) => {
            return str.includes("*");
        };
        this.HasLetter = (str, letter) => str.includes(letter);
        this.DoubleLetter = () => {
            alert(`the letter was already in there! please enter a new letter `);
            return this.GetStringFromUser();
        };
        this.Startprogram = () => {
            let fail = 0;
            let attempts = 0;
            const word = "or konijn";
            let Encrypt = this.MaskString(word);
            let letters = this.BreakTheWordUp(word);
            console.log(letters);
            while (fail < 6) {
                let letter = this.GetStringFromUser();
                let locations = this.FindCharLocations(letter, letters);
                locations.forEach(element => {
                    Encrypt = this.SetCharAt(Encrypt, element, letter);
                });
                if (locations.length != 0) {
                    alert(`It worked!! the word looks like ${Encrypt} `);
                }
                else {
                    fail++;
                    alert(`Im sorry it didnt Work. the number of fail is ${fail} `);
                }
            }
            if (this.WinCondition(Encrypt)) {
                alert(`Game finished you won!! the word was ${Encrypt} `);
            }
            else {
                alert(`sorry but you lost, the word was ${word} `);
            }
        };
    }
}
let games = new Game();
games.Startprogram();
