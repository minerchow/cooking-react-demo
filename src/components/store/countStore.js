import { observable,action, computed } from 'mobx';
class CountStore{
    @observable num = 0;
    @action add = function(){
        this.props.store.num++;
        
    }
    @action min = function(){
        this.props.store.num--;
    }

    @computed get display(){
       console.log(this.props)
        
    }
}

export default CountStore;