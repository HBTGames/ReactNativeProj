import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
} from 'react-native';



export default class Dic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typedWord: "",
            data: this.props.data,
            word: "",
            trans: ""
        }
    }

    componentDidMount() {

    }

    searchTrans = (text) => {
        var lowerCaseText = text.toLowerCase()
        var textTrans = this.state.data.filter((item) => item.word === lowerCaseText)[0];
        if (textTrans) {
            this.setState({
                typedWord: text,
                word: lowerCaseText,
                trans: textTrans.translation
            })
        } else {
            this.setState({
                word: lowerCaseText,
                typedWord: text,
                trans: "Sorry, the word is unavailable in db rn."
            })
        }

    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#F6FFEB" }}>
                <SafeAreaView style={{ padding: 20, paddingTop: 50, backgroundColor: "#25C3FF" }} >
                    <TextInput
                        style={{ padding: 10, backgroundColor: "#fff", margin: 10 }}
                        placeholder="Search"
                        onChangeText={this.searchTrans}
                        value={this.state.typedWord}>
                    </TextInput>
                </SafeAreaView>
                <ScrollView>
                    {this.state.typedWord === "" ? null : <View>
                        <Text style={{ padding: 20, backgroundColor: "#fff", fontSize: 30 }}>{this.state.word}</Text>
                        <Text style={{ padding: 20, backgroundColor: "#fff", marginTop: 10 }}>{this.state.trans}</Text>
                    </View>
                    }

                </ScrollView>
                <Text style={{ padding: 10, backgroundColor: "#fff", fontSize: 20, textAlign: "center", bottom: 0, marginBottom: 10 }}>Hailey Dict</Text>


            </View>
        );
    }
}