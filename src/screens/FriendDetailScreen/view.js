import React, {Fragment} from 'react';
import {Avatar} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import isEmpty from 'lodash/isEmpty';
import {useFriendDetail} from '~/models';
import Button from '~/components/Button';
import colors from '../../theme/color';
import shadow from '../../theme/shadow';
import Text from '~/components/Text';
import {useNavigation} from 'react-native-navigation-hooks';

const FriendDetailScreen = ({friendId}) => {
  const {push} = useNavigation();
  const friend = useFriendDetail(friendId);

  if (isEmpty(friend)) return <Fragment />;

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Avatar
          rounded
          style={styles.avatar}
          source={{uri: friend.get('avatar')}}
        />
        <View>
          <Text style={styles.nickname}>{friend.get('name')}</Text>
          <Text h4>{friend.get('job')}</Text>
        </View>
      </View>
      <View style={styles.introZone}>
        <Text h5>{friend.get('description')}</Text>
      </View>
      <Button
        title='開始聊天'
        onPress={() => push('Chat', {roomId: friend.get('room')})}
      />
      <Button
        title='設定'
        type='outline'
        onPress={() => push('FriendSetting', {friendId: friend.get('id')})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  infoBox: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    borderColor: colors.greyLightest,
  },
  introZone: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderWidth: 5,
    marginRight: 15,
    borderRadius: 80,
    borderColor: '#fff',
    backgroundColor: '#fff',
    ...shadow.black,
  },
  title: {
    paddingLeft: 20,
  },
  nickname: {
    fontSize: 36,
    color: colors.grey,
  },
});

export default FriendDetailScreen;