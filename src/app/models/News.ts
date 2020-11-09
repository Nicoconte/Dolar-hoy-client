import { HttpClient } from '@angular/common/http'; 

export class News {
    private http : HttpClient;

    private title : String;
    private publishedAt : String;
    private redirectUrl : String;
    private author : String;
    private imgUrl : String;

    private response : News[] = new Array();

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

    constructor(http : HttpClient, title:String="", date:String="", url:String="", author:String="", img:String="") {
        this.http = http;
        this.title = title;
        this.publishedAt = date;
        this.redirectUrl = url;
        this.author = author;
        this.imgUrl = img;
    }

    public getLastestNews(date : any) {
        this.http.get<any>("/v2/top-headlines?country=ar&pageSize=15&category=business&apiKey=2abe2eadfbce45bc9044dbbdbd05e5b9").subscribe(res => {
            res.articles.forEach(data => {
                this.response.push(new News(this.http, data.title, data.publishedAt, data.url, data.author, data.urlToImage));
            });
        });
        
        return this.response;
    }


}