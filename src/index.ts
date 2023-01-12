console.log("hi");


class Game{
    constructor(){

    }

     GetStringFromUser=():string=>{
        const letter : string | null = prompt("guess a letter:");
        if(typeof letter == "string"){
            return letter
        }
        alert("not good")
        return this.GetStringFromUser();
    }
    
     FindCharLocations=(char:string, arr:string[]) : number[]=> {
        let locations = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === char) locations.push(i)
        }
        return locations
    }
    
     BreakTheWordUp=(word:string) :string[]=>{
        return word.toLowerCase().split('');
    }
    
     SetCharAt=(str:string,index:number,chr:string):string => {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
    
    MaskString=(str: string): string =>{
        return str.replace(/[^\s]/g, "*");
      }
    
    
    
    
    WinCondition=(str: string): boolean =>{
        return str.includes("*");
      }
    

    HasLetter = (str: string, letter: string):boolean => str.includes(letter);
    
    DoubleLetter =():string =>{
        alert(`the letter was already in there! please enter a new letter `);
        return this.GetStringFromUser();
    }
    
    Startprogram =():void=>{
        let fail =0; 
        let attempts =0;
        const word ="or konijn";
        let Encrypt =this.MaskString(word);
        let letters = this.BreakTheWordUp(word);
        console.log(letters);
    
        while (fail<6){
            let letter =this.GetStringFromUser();
            let locations =this.FindCharLocations(letter,letters);
            locations.forEach(element => {
                Encrypt=this.SetCharAt(Encrypt,element,letter);
            });
            if(locations.length!=0){
                alert(`It worked!! the word looks like ${Encrypt} `);
            }
            else{
                fail++;
                alert(`Im sorry it didnt Work. the number of fail is ${fail} `);
            }
        }
        if(this.WinCondition(Encrypt)){
            alert(`Game finished you won!! the word was ${Encrypt} `);
        }
        else{
            alert(`sorry but you lost, the word was ${word} `);
        }
        
    }

}






let games = new Game();
games.Startprogram();