
export class Card{

    public constructor(
        public id?: number,
        public isVisible: boolean = true,
        public isClicked: boolean = false,
        public currentPath?: string,
        public imagePath?: string,
        public pairId?: number,

    ) { }
    
}