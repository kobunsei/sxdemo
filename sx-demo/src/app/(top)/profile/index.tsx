import Colors from '@/constants/Colors';
import { Link, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Auth } from 'aws-amplify';

export default function ProfileScreen() {
  const router = useRouter();

  const handleSignout = async () => {
    try {
      await Auth.signOut();
      router.replace('(auth)/');
    } catch (error) {
      console.error('ログアウトに失敗しました', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>名　前：    太郎</Text>
      <Text style={styles.title}>役　職：    担当</Text>
      <Text style={styles.title}>連絡先：    03-3333-3333</Text>
      <View style={styles.separator} />
      <Link href="(top)/profile/passwordChange" style={styles.textButton}>
        パスワード変更
      </Link>
      <Link href="(top)/profile/passwordChange" style={styles.textButton}>
        プロファイル変更
      </Link>
      <Pressable onPress={handleSignout}>
        <Text style={styles.textButton}>サインアウト</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textButton: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
