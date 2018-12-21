import React, { Component } from 'react';
import {ListView,Text ,View} from 'react-native';
export default class ListViewScreen extends Component{
    constructor(props){
        super(props);
        this.state={ dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),     
        }
      }
      render() {
        return (
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
          <View> 
              <Text>{rowData}</Text> 
              </View>
         }
          />
        );
      }
      componentDidMount(){
          var arr =["Item số 1","Item số 2","Item số 3"]
          this.setState({
              dataSource:this.state.dataSource.cloneWithRows(arr)//đổ data vào dataSource
          })
      }
    
  }
 
