export default class Post {

    id: number
    texts: string
    img_url: string
    planet: string
    date: Date
    parent_id: number
    author: number

    constructor(id: number, texts: string, img_url: string, planet: string, date: Date, parent_id: number, author: number){
        this.id = id;
        this.texts =texts;
        this.img_url = img_url;
        this.planet =planet;
        this.date = date;
        this.parent_id = parent_id;
        this.author = author;
    }
}
