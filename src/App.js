import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';
import { Home } from './pages/Home/Home';
import { RegistrationForm } from './components/registration-form/RegistrationForm';
import { AuthorizationFormContainer } from './components/authorization-form/AuthorizationFormContainer'
import { Formats } from './pages/formats/formats';
import { ListOfPlansOnDay } from './pages/list-of-plans-on-day/listOfPlansOnDay';
import { PlansOnDay } from './pages/plans-on-day/plansOnDay';



class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      dataOfLists: [
        
      ]

    }

    this.madeCategoriesList = this.madeCategoriesList.bind(this);
    this.madeListOfDeal = this.madeListOfDeal.bind(this);
    this.addListInCategory = this.addListInCategory.bind(this);
    this.addToDoList = this.addToDoList.bind(this);
    this.anableListInCategory = this.anableListInCategory.bind(this);
    this.disableListInCategory = this.disableListInCategory.bind(this);
   
    this.maxId = 0;
    this.randomId = Math.floor(Math.random());
  }

  madeCategoriesList(text) {
    const category = {
        id: this.maxId++,
        isCategory: true,
        addList: false,
        label: text,
        list: []};

        this.setState(({dataOfLists}) => {
          const newArr = [category, ...dataOfLists]
          return {
            dataOfLists: newArr
          }
      });
  }

  anableListInCategory(labelOfCategory) {

    this.setState(() => {
      const newData = this.state.dataOfLists;
  

      newData.forEach((item) => {
      if(item.label === labelOfCategory){
        item.addlist = true;
      }
    });
      return {
        dataOfLists: newData
      }
    });
    
  }

  disableListInCategory(labelOfCategory) {
    this.setState(() => {
      const newData = this.state.dataOfLists;
  

      newData.forEach((item) => {
      if(item.label === labelOfCategory){
        item.addlist = false;
      }
    });
      return {
        dataOfLists: newData
      }
    });
  }


  madeListOfDeal(text, url, id) { 
    const listItem = {
      id: id,
      isCategory: false,
      label: text,
      url: url,
      list: []};

      this.setState(({dataOfLists}) => {
          const newArr = [listItem, ...dataOfLists]
          return {
            dataOfLists: newArr
          }
      });

  }

  addListInCategory(text, url, id, categoryName) { 
    const listItem = {
      id: id,
      isCategory: false,
      label: text,
      url: url,
      list: []};

      const newData = this.state.dataOfLists;

      newData.forEach(item => {
        if(item.label === categoryName) {
          item.list = [listItem, ...item.list];
        }
      });

      this.setState(() => {
        return {
          dataOfLists: newData
        }
      });
  }

  addToDoList(text, listId) { 
    const listItem = {
      id: this.randomId,
      checking: false,
      deletting : false,
      label: text,
     };
     console.log(listItem);

     const newData = this.state.dataOfLists;

      newData.forEach(item => {
        if(item.isCategory) {
          item.list.forEach(point => {
            if(point.id === listId) {
              point.list = [listItem, ...item.list];
            }
          })
        } else {
          if(item.id === listId) {
            item.list = [listItem, ...item.list];
          }
        }
      });

      console.log(newData);

      this.setState(() => {
        return {
          dataOfLists: newData
        }
      });
  }


    render() {
      return (
        <Router>
            <div className="page">

              <Switch>
                  <Route exact path={'/formats/list-of-plans-on-day/:id'} 
                  render={({match}) => {
                    const {id} = match.params;
                    return <PlansOnDay plansId={id}
                    addToDoList={this.addToDoList} 
                    dataOfLists={this.state.dataOfLists}/>
                  }} />
                  <Route exact path={'/formats/list-of-plans-on-day'} >
                    <ListOfPlansOnDay  
                        madeCategoriesList={this.madeCategoriesList}
                        madeListOfDeal={this.madeListOfDeal}
                        dataOfLists={this.state.dataOfLists}
                        addListToCategory={this.state.addListToCategory} //значение true или false
                        anableListInCategory={this.anableListInCategory}
                        disableListInCategory={this.disableListInCategory}
                        addListInCategory={this.addListInCategory} // функция отправки данных
                        />
                  </Route>
                  
                  <Route exact path={'/formats'} component={Formats} />
  
                  <Route exact path={'/registration-form'} component={RegistrationForm} />
  
                  <Route exact path={'/authorization'} component={ AuthorizationFormContainer} />
  
                  <Route path={'/'}>
                    <Home />
                  </Route>
  
                </Switch> 
              </div>
        </Router>
      )
    }
}

export default App;
