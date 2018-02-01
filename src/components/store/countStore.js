import { observable,action, computed } from 'mobx';
class CountStore{
    @observable num = 0;
    @action
    add(obj){
        console.log(obj)
        setTimeout(()=>{
            this.props.countstore.num++;
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