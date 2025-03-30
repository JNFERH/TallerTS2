export class Serie {

    public num : number;

    public name : string;

    public channel : string;

    public seasons : number;

    public desc : string;

    public link : string;

    public img : string;

    constructor (num : number, name : string, channel : string, seasons : number, desc : string, link : string, img : string){

        this.num= num;
        this.name= name;
        this.channel= channel;
        this.seasons= seasons;
        this.desc= desc;
        this.link=link;
        this.img=img;

    }
}