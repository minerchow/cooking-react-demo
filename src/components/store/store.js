import { observable, computed } from 'mobx';
class Store {
   @observable txt = "";
   @computed get decorated(){
       return `${this.txt}`;
   }
}

export default Store;