import React, { Component } from 'react';
import { ScrollView, AppRegistry } from 'react-native';
import RoomBtn from './button';

export default class ButtonList extends Component {
    render() {
        var arr = ["ting", "ting2", "ting3"]

        var ListRooms = arr.map((v, i) => {
            return <RoomBtn name={v} func={() => this.props.btnfunc()} />
        })
        return (
            <ScrollView>
                {ListRooms}
            </ScrollView>
        )
    }
}