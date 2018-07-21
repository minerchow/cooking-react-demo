import { observable, action, computed, runInAction, autorun, extendObservable } from 'mobx';
import axios from 'axios';
class CountStore{
    @observable num = 0;
    @observable list = [];
    @observable person = {
        name:"xiaoming"
    }
    
    @observable arr = ['a']
    constructor(){
        autorun(()=>{
            //console.log(Array.isArray(this.list.slice()))
            //console.log(this.arr.slice())
            console.log(this.person)
        })
        
    }
    @action
    add(obj){
        this.props.countstore.num++;
    }
    @action
    min(){
        this.props.countstore.num--;
    }
    @action
    getData(){
        axios.get('https://cnodejs.org/api/v1/topics').then((result)=>{
            if(result.data.success){
                runInAction(() => {
                    this.props.countstore.list = result.data.data;
                })
            }
        })
    }
    @action
    changeName(){
      this.props.countstore.person.name = "xiaohong";
      //  this.props.countstore.person.age=18;
      // this.props.countstore.arr.push('b');
      
    }
  
    @computed get displayResult(){
        return this.num;
    }
    

}

export default CountStore;