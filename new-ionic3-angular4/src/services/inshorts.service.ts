import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface fact {
    url: string;
    title: string;
    content: string;
  }

  @Injectable()
export class InshortsService{

    appData: any=[
        {
          "url":"https://amgs.000webhostapp.com/inshorts/img_1.jpg",
          "title":"Do you know who is the author of Harry potter novel?",
          "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim "
        },
        {
          "url":"https://amgs.000webhostapp.com/inshorts/img_2.jpg",
          "title":"Do you know who is the highest ODI scorere in cricket?",
          "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "url":"https://amgs.000webhostapp.com/inshorts/img_3.jpg",
          "title":"Do you know who is the Frankeistein?",
          "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
           "url":"https://amgs.000webhostapp.com/inshorts/img_4.jpg",
           "title":"Do you know what is abbreviation of IRCTC?",
           "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ];

    facts:Observable<fact[]>
    public _facts:BehaviorSubject<fact[]>;
    public datastore:{
        facts:fact[]
    };

    constructor(){
        this.datastore={facts:[]};
        this._facts=<BehaviorSubject<fact[]>>new BehaviorSubject([]);
        this.facts=this._facts.asObservable();
    }

    loadAll(){
        this.datastore.facts=this.appData;
        this._facts.next(Object.assign({},this.datastore).facts);
    }

    create(Fact:fact)
    {
        this.datastore.facts.splice(0,0,Fact); 
        this._facts.next(Object.assign({},this.datastore).facts);
    }
}