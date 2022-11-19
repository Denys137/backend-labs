
export class Cost {
    id: number;
    userId: number;
    categoryId: number;
    time: Date;
    sum: number;
    constructor(
        id: number,
        userId: number,
        categoryId: number,
        sum: number){
            this.id = id;
            this.userId = userId;
            this.categoryId = categoryId;
            this.time = new Date();
            this.sum = sum;
        }
}