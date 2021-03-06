import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

export interface fact {
    url: string;
    title: string;
    content: string;
  }

  @Injectable()
export class InshortsService{

    appData: any;

    facts:Observable<fact[]>
    public _facts:BehaviorSubject<fact[]>;
    public datastore:{
        facts:fact[]
    };
    public baseUrl: string;

    constructor(private http: HttpClient,public storage:Storage){
        this.baseUrl = 'https://api.mlab.com/api/1/databases/inshorts/collections/inshorts?s={"_id":-1}&apiKey=QNH8bLxLRarS0SVIAFS_lHK-V6FUPjy-';
        this.datastore={facts:[]};
        this._facts=<BehaviorSubject<fact[]>>new BehaviorSubject([]);
        this.facts=this._facts.asObservable();
    }

    loadAll(){
        console.log("Load All");

        this.http.get(this.baseUrl).subscribe(data => {
        if(data!=null)
        {
            this.appData=data;
            console.log("Internet is UP");
        }else{
            this.appData=this.storage.get("feed");
            console.log("Internet is DOWN");
        }
        this.datastore.facts=this.appData;
        this._facts.next(Object.assign({},this.datastore).facts);
        this.storage.set("feed",this.appData);   

        });
    }

    create(Fact:fact)
    {
        this.datastore.facts.splice(0,0,Fact); 
        this._facts.next(Object.assign({},this.datastore).facts);
    }
}