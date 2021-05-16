export class Ladder {
    constructor(
        public rank: number,
        public draws: number,
        public played: number,
        public against:number,
        public percentage:number,
        public for:number,
        public pts:number,
        public goals_for:number,
        public wins:number,
        public behinds_against:number,
        public id:number,
        public behinds_for:number,
        public losses:number,
        public name:string,
        public goals_against:number
    ){}
}
