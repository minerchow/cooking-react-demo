import { observable,action, computed } from 'mobx';
class CountStore{
    @observable num = 0;
    @computed get displayResult(){
        return this.num;
    }
}

export default CountStore;