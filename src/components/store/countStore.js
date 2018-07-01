import { observable, action, computed, runInAction } from 'mobx';
class CountStore{
    @observable num = 0;
    @action
    add(obj){
        
        setTimeout(()=>{
            runInAction(()=>{
                console.log(this.props.countstore.num)
                this.props.countstore.num--;
            })
           
        },300)    
     
    }
    @action
    min(){
        this.props.countstore.num--;
    }
    @computed get displayResult(){
        return this.num;
    }
}

export default CountStore;