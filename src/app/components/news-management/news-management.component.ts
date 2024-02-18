import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news-management',
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.css']
})
export class NewsManagementComponent implements OnInit {

  newsList =[
  {"imgSrc": "assets/icons/gray.png", "newsTilte": "قانون تنظيم قطاع المياه والصرف الصحي رقم (40/2023)", "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {"imgSrc": "assets/icons/water.png", "newsTilte": "لائحة تنظيم جودة المياه الصالحة للشرب", "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {"imgSrc": "assets/icons/car.jpeg", "newsTilte": "دليل المتطلبات الفنية لشحن السيارات الكهربائية", "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
];

newsName = "";
newsSummary = "";
newsContent = "";
index:any;
mainImgName = "";
newNews:any;

editNewsMood = false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteNews(index:any){
    this.newsList.splice(index,1);
  }

  openEditNews(index:any){
    (document.getElementById("addNews") as HTMLInputElement).click();
    this.index = index;
    this.editNewsMood = true;
    this.newsName = this.newsList[index].newsTilte;
    this.newsSummary = this.newsList[index].summary;
    this.newsContent = this.newsList[index].content;
  }

  editNews(){
    this.newsList[this.index]["newsTilte"] = this.newsName;
    this.newsList[this.index]["summary"] = this.newsSummary;
    this.newsList[this.index]["content"] = this.newsContent;
    this.newsList = this.newsList;
  }

  getImgName(event:any){
    if(this.index != ""){
      this.newsList[this.index]["imgSrc"] = "assets/icons/" + event.target.files[0].name;
      this.newsList = this.newsList;
    }else{
      this.newNews = {};
    this.newNews["imgSrc"] = "assets/icons/" + event?.target?.files[0]?.name;

    }
  }

  previewNews(index:any){
    this.newsName = this.newsList[index].newsTilte;
    this.newsSummary = this.newsList[index].summary;
    this.newsContent = this.newsList[index].content;
    this.mainImgName = this.newsList[index].imgSrc;
  }

  openAddNewsModal(){
    this.index = "";
    this.editNewsMood = false;
    this.newsName = "";
    this.newsSummary = "";
    this.newsContent = "";
    this.mainImgName = "";
  }

  addNewNews(){
    this.newNews["newsTilte"] = this.newsName;
    this.newNews["summary"] = this.newsSummary;
    this.newNews["content"] = this.newsContent;
    this.newsList.push(this.newNews);
  }

}
