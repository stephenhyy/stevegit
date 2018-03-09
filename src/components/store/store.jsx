import { observable, action, computed } from 'mobx';
export default class Store {
    @observable todos = [
        { 
            title: '吃饭',
            done: true,
            key:1, 
        },{ 
                title: '睡觉', 
                done: false,
                key:2, 
        },{
                title: '打豆豆', 
                done: false,
                key:3,

        }];
        @action addTodo(title){
            let todo = {
                title: title,
                done: false,
                key: (new Date()).getTime()
            };
            this.todos.unshift(todo)
        };
        @action deleteTodo(key){
            this.todos = this.todos.filter((todo)=>{
                return todo.key != key
            })
        };
        @action deleteAllTodosDone(){
            this.todos = this.todos.filter((todo)=>!todo.done)
        };
        @action changeTodoDone(key){
            this.todos.forEach((todo)=>{if(todo.key == key){todo.done = !todo.done}})
        };
        @action changeAllTodosDone(done){
            let isdone = !done;
            this.todos.forEach((todo)=>{todo.done = isdone})
        };
        @computed get isAllCheck(){
            let unTodos = this.todos.filter((todo)=>!todo.done)
            return unTodos.length === 0 && this.todos.length > 0
        };
        @computed get lengthOfTodos(){
            return this.todos.length
        };
        @computed get lengthOfFinishTodos(){
            return this.todos.filter((todo)=>todo.done).length
        };
        @computed get haveFinishedTodo(){
            return this.todos.filter((todo)=>todo.done).length > 0 && this.todos.length > 0
        }
}