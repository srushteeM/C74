import React from 'react';
import { Text, View , ScrollView,Flatlist, TextInput} from 'react-native';
import db from "../config.js";

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allTransaction : [],
      lastVisibleTransaction : null
    }

  }

  componentDidMount = async()=>{
    const query = await db.collection("transaction").get();
    query.docs.map((doc)=>{
      this.setState({
        allTransaction : [...this.state.allTransaction, doc.data()],
        lastVisibleTransaction : doc,

      })

    })

  }

  fetchMoreTransaction = async()=>{
    const query = await db.collection("transaction").startAfter(this.state.lastVisibleTransaction).limit(10).get();
    query.docs.map((doc)=>{
      this.setState({
        allTransaction : [...this.state.allTransaction, doc.data()],
        lastVisibleTransaction : doc,

      })

    })
  }

    render() {
      return (
        <Flatlist 
        data = {this.state.allTransaction}
        renderItem = {
          ({item})=>{
            <View style ={{borderBottomWidth : 2}} key={index}>
                <Text>{"bookID :" + transaction.bookID}</Text>
                <Text>{"studentID :" + transaction.studentID}</Text>
                <Text>{"Transaction Type :" + transaction.transactionType}</Text>
                <Text>{"Date :" + transaction.date.toDate()}</Text>
              </View>
          }
        }
         keyExtractor = {(item, index)=>index.toString()}          
         onEndReached = {this.fetchMoreTransaction()}
         onEndReachedThreshold = {0.7}
        />
               
      );
    }

  }