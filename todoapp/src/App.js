
import React, { Component } from 'react';
import './App.css';

let idNum = 1;
class App extends Component{

  constructor(){
    super();
    this.state = {
      itemText : "",
      allItems : [
        {
        id :  0,
        todoDes : "Sample Task (You can Delete it)",
        isCompleted : false
      }]
  }
  
}

  handleChange(event){ //To keep updating itemText (Text Input) every step we are making changes in our input list.
    const {name,value} = event.target;
    this.setState({[name] : value});
  }

  handleAddItem(){ // To add the item in our list 
    if(this.state.itemText){
      let obj = {
        id : idNum,
        todoDes : this.state.itemText,
        isCompleted : false
      }
      const updateItems = this.state.allItems.push(obj);
      this.setState({updateItems});
      idNum++;
    }
  }

  handleItemDelete(item){ //To delete the item from the list on clicking remove button against any item
    const allItems = this.state.allItems.filter((eachItem) => {
      return eachItem.id !== item.id;
    });
    this.setState({ allItems });
  }

  handleTaskDone(item){ //To mark any task as done
    const updateStatus = this.state.allItems.map((eachItem) => {
      if(item.id === eachItem.id){
        eachItem.isCompleted = true;
      }
      return true;
   });
    this.setState({updateStatus});
  }

  render(){
    return(
      <div>
        <h1 id = "mainHead">Todo List</h1>
        <div id={"addDiv"}>
          <h4 style={{display : 'inline', marginRight : '1vw', fontFamily: '"Joan", serif', fontSize : '2rem'}}>What task you want to add?</h4>
          <input style = {{borderRadius : '10px'}} id={"textInput"} type={"text"} placeholder={"Add new item"} 
          value={this.state.itemText} name={"itemText"} onChange = { (event) =>{
            this.handleChange(event);
          } } 
          required />

          {/* <br/> */}
          <button style = {{marginLeft : '1vw'}} id={"addBtn"} type={"submit"} onClick={() => {
            this.handleAddItem();
          }}>
          Submit </button>
          </div>

          <div style = {{height : '50vh', paddingTop : '1px'}}>
            <div style = {{background : '#F9CEEE', }} id={"listDiv"}>
              {
                this.state.allItems.map((item) => (
                  <div  className={"listItems"} key={item.id}>
                    {item.isCompleted ? <div className={"taskName isDone"}><strike>{item.todoDes}</strike></div> : <div className={"taskName"}>{item.todoDes}</div>}
                    <span className={"button-span"}> 
                    <button className={"btn-done"} onClick={() => {
                        this.handleTaskDone(item);
                        }
                      }> Done </button>
                      <button className={"btn-remove"} onClick={() => {
                        this.handleItemDelete(item);
                        }
                      }> Delete </button> 
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
      </div>
    );
  }

}



export default App;
