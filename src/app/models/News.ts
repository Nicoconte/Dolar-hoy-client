<<<<<<< HEAD
export class News {

    private title : String;
    private publishedAt : String;
    private redirectUrl : String;
    private author : String;
    private imgUrl : String;

    public getTitle(): String {
        return this.title;
    }

    public setTitle(title: String) {
        this.title = title;
    }

    public getPublishedAt(): String {
        return this.publishedAt;
    }

    public setPublishedAt(publishedAt: String) {
        this.publishedAt = publishedAt;
    }

    public getRedirectUrl(): String {
        return this.redirectUrl;
    }

    public setRedirectUrl(url: String) {
        this.redirectUrl = url;
    }

    public getAuthor(): String {
        return this.author;
    }

    public setAuthor(author: String) {
        this.author = author;
    }

    public getImgUrl() {
        return this.imgUrl;
    }

    public setImgUrl(url : String) {
        this.imgUrl = url;
    }

    constructor(title:String, date:String, url:String, author:String, img:String) {
        this.title = title;
        this.publishedAt = date;
        this.redirectUrl = url;
        this.author = author;
        this.imgUrl = img;
    }
=======
export class News {

    private title : String;
    private publishedAt : String;
    private redirectUrl : String;
    private author : String;
    private imgUrl : String;

    public getTitle(): String {
        return this.title;
    }

    public setTitle(title: String) {
        this.title = title;
    }

    public getPublishedAt(): String {
        return this.publishedAt;
    }

    public setPublishedAt(publishedAt: String) {
        this.publishedAt = publishedAt;
    }

    public getRedirectUrl(): String {
        return this.redirectUrl;
    }

    public setRedirectUrl(url: String) {
        this.redirectUrl = url;
    }

    public getAuthor(): String {
        return this.author;
    }

    public setAuthor(author: String) {
        this.author = author;
    }

    public getImgUrl() {
        return this.imgUrl;
    }

    public setImgUrl(url : String) {
        this.imgUrl = url;
    }

    constructor(title:String, date:String, url:String, author:String, img:String) {
        this.title = title;
        this.publishedAt = date;
        this.redirectUrl = url;
        this.author = author;
        this.imgUrl = img;
    }
>>>>>>> 9884f4cfe3e4d0869ba906ec62ef5724c510175f
}