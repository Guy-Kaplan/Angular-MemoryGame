import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { Image } from '../../models/image';
import { ImagesService } from '../../services/images.service';
import { Result } from '../../models/result';
import { ResultsService } from '../../services/results.service';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  
    private readonly backCardPath: string = "https://www.ikea.com/us/en/images/products/ribba-frame-black__0638328_PE698852_S4.JPG";
    private readonly numOfCards: number = 16;
    private readonly numOfImages: number = 8;
    private readonly maxSeconds: number = 59;
    public stopperStr: string = "00:00";
    private numOfClicks: number = 0;
    private numOfPairsFound: number = 0;
    private gameStopperSeconds: number = 0;
    private gameStopperMinutes: number = 0;
    public numOfSteps: number = 0;
    private isGameNotWon: boolean = true;
    public cards: Card[] = new Array<Card>(this.numOfCards);
    private imagesPaths: string[] = new Array<string>(this.numOfImages);
    private imagesCounters: number[] = new Array<number>(this.numOfImages);
    private images: Image[];
    private results: Result[];
    private users: User[];
    private firstCardID: number;
    public userLoggedIn: string;
    private interval;

  
    public constructor(private imagesService: ImagesService, private resultsService: ResultsService,
        private usersService: UsersService) { }

    public ngOnInit(): void {
        this.userLoggedIn = sessionStorage.getItem("UserLoggedIn");
        let observable = this.imagesService.getAllImages();
        observable.subscribe(images => {
            this.images = images;
            this.startGame();
        });
        let observable2 = this.resultsService.getAllResults();
        observable2.subscribe(results => {
            this.results = results;
        });
        let observable3 = this.usersService.getAllUsers();
        observable3.subscribe(users => {
            this.users = users;
        });
    }

    /// Function for starting the game.
    /// Updates variables accordingly.
    public startGame(): void {
        this.isGameNotWon = true;
        this.numOfSteps = 0;
        this.numOfClicks = 0;
        this.numOfPairsFound = 0;
        this.initImagesPaths();
        this.initCards();
        this.shuffleCards();
        this.setCardPairs();
        this.startStopper();
    }

    /// Function for handling mouse clicks along the game.
    /// That includes applying the game mechanism and handling the cards.
    public onclick(id): void {
        if(this.isGameNotWon && this.numOfClicks < 2 && !this.cards[id].isClicked && this.cards[id].isVisible){
            this.cards[id].currentPath = this.cards[id].imagePath; // flip card to image
            this.cards[id].isClicked = true;
            this.numOfClicks++;
            if(this.numOfClicks === 1){
                this.firstCardID = id;
            }
            else{
                if(this.cards[id].pairId === this.firstCardID){ // pair is found
                    setTimeout(() => {
                        this.vanishPair(id, this.cards[id].pairId);
                    }, 1000); //delay of 1 second
                    this.numOfPairsFound++;
                    if(this.numOfPairsFound === (this.numOfCards) / 2){ // user wins
                        setTimeout(() => {
                            this.addResult();
                        }, 1500); //delay of 1.5 seconds
                        this.isGameNotWon = false;
                        this.pauseStopper();
                    }
                    this.numOfSteps++;
                }
                else{ // pair not found
                    setTimeout(() => {
                        this.flipAllCardsBack();
                    }, 1000); //delay of 1 second
                    this.numOfSteps++;
                }
            }
        }
    }

    /// Function that sets the right and full images paths in a designated array.
    private initImagesPaths(): void {
        for(let i=0;i<this.imagesPaths.length;i++){
            this.imagesPaths[i] = `./assets/images/${this.images[i].imageFileName}`;
        }
    }

    /// Function that sets the cards array to its base position.
    /// Updates variables accordingly.
    private initCards(): void {
        for(let i=0;i<this.numOfCards;i++){
            this.cards[i] = new Card();
            this.cards[i].id = i;
            this.cards[i].currentPath = this.backCardPath;
        }
    }

    /// Function that shuffles the cards and sets each a random image.
    private shuffleCards(): void {
        let rndNum: number;
        this.initArrayWithZeroes(this.imagesCounters);
        for(let i=0;i<this.numOfCards;i++){
            rndNum = this.getRandomNumberBetweenMinAndMax(0, this.numOfImages - 1);
            while(this.isCellInImagesCountersFull(rndNum))
                rndNum = this.getRandomNumberBetweenMinAndMax(0, this.numOfImages - 1);
            this.cards[i].imagePath = this.imagesPaths[rndNum];
            this.imagesCounters[rndNum]++;
        }
    }

    /// Function that flips all the cards to their back side.
    /// Updates variables accordingly.
    private flipAllCardsBack(): void {
        this.numOfClicks = 0;
        for(let i=0;i<this.numOfCards;i++){
            if(this.cards[i].isVisible){
                this.cards[i].currentPath = this.backCardPath;
                this.cards[i].isClicked = false;
            }
        }
    }

    /// Function that vanishes a pair of cards that has been found by the user.
    /// Updates variables accordingly.
    private vanishPair(id1: number, id2: number): void {
        this.numOfClicks = 0;
        this.cards[id1].currentPath = "";
        this.cards[id2].currentPath = "";
        document.getElementById(`${id1}`).style.visibility = "hidden";
        document.getElementById(`${id2}`).style.visibility = "hidden";
        this.cards[id1].isVisible = false;
        this.cards[id2].isVisible = false;
    }

    /// Function that sets the pairs to the right cards in the array.
    private setCardPairs(): void {
        for(let i=0;i<this.numOfCards;i++){
            this.cards[i].pairId = this.getCardPairID(i);
        }
    }

    /// Returns the pair's card ID of the card with the given card location in the array.
    /// If there is no matching pair card, returns -1.
    private getCardPairID(cardLocation: number): number {
        for(let i=0;i<this.numOfCards;i++){
            if(i != cardLocation && this.cards[cardLocation].imagePath === this.cards[i].imagePath)
                return i;
        }
        return (-1);
    }

    /// Function that sets an entire array with zeroes.
    private initArrayWithZeroes(arr: number[]): void {
        for(let i=0;i<arr.length;i++){
            arr[i] = 0;
        }
    }

    /// Returns true if the image of the given number has already been taken by two different cards.
    /// Otherwise, returns false.
    private isCellInImagesCountersFull(num: number): boolean {
        if(this.imagesCounters[num] === 2)
            return true;
        return false;
    }

    /// Function that starts the stopper which displays the current game time.
    /// Updates variables accordingly.
    private startStopper(): void {
        this.stopperStr = "00:00";
        clearInterval(this.interval);
        this.gameStopperMinutes = 0;
        this.gameStopperSeconds = 0;
        this.interval = setInterval(() => {
            if(this.gameStopperSeconds < this.maxSeconds) {
                this.gameStopperSeconds++;
            }
            else{
                this.gameStopperSeconds = 0;
                this.gameStopperMinutes++;
            }
            this.setStopperStr();
        },1000) // 1 sec
    }

    /// Function that stops the stopper which displays the current game time.
    private pauseStopper(): void {
        clearInterval(this.interval);
    }

    /// Function that sets the string to display the stopper which shows the current game time.
    private setStopperStr(): void {
        this.stopperStr = "";
        if(this.gameStopperMinutes < 10)
            this.stopperStr += "0";
        this.stopperStr += this.gameStopperMinutes + ":";
        if(this.gameStopperSeconds < 10)
            this.stopperStr += "0";
        this.stopperStr += this.gameStopperSeconds;        
    }

    /// Returns a random number between the given min and max numbers.
    public getRandomNumberBetweenMinAndMax(min: number, max: number): number {
        let random: number;
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    }

    /// Function that adds the current game's result to the DB.
    private addResult(): void {
        let resultToAdd = new Result();
        resultToAdd.userID = this.getIdByUserName(this.userLoggedIn);
        resultToAdd.timeSpan = this.stopperStr;
        resultToAdd.steps = this.numOfSteps;
        let observable = this.resultsService.addResult(resultToAdd);
        observable.subscribe(r => {
            this.displayWinMsg();
            this.results.push(r);
        });
    }

    /// Function that displays the win message for the user after winning a game.
    public displayWinMsg(): void {
        alert(`
        Game Won!!!
        Very Good!
        Your game result has been saved.
        (Click 'Restart' to play again)`);
    }

    /// Returns the user ID of the user with the given user name.
    /// If there is no such a user name, returns -1.
    public getIdByUserName(userName: string): number {
        for(let i=0;i<this.users.length;i++)
            if(this.users[i].userName === userName)
                return this.users[i].id;
        return (-1);
    }
}