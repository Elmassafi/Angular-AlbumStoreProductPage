// tslint:disable-next-line:comment-format
//import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/*@Injectable()*/
export class ProductService {

  constructor(private _http: Http) { }
  // tslint:disable-next-line:member-ordering
  private  _albumUrl = '../assets/album.json';

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
  }
}
