import React,{useContext} from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';
import {Context} from '../context/BlogContext';
const IndexScreen=()=>{
    const {state,addNewBlogPost}=useContext(Context);
    return (<View>
        <Text>IndexScreen</Text>
        <Button title="Add New Post" onPress={addNewBlogPost} />
        <FlatList 
            data={state}
            keyExtractor={(BlogPost)=>BlogPost.title}
            renderItem={({item})=>{
                return(<Text>{item.title}</Text>)
            }}
        />
    </View>)
};

const style=StyleSheet.create({

});

export default IndexScreen;