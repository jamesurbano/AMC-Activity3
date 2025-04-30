import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const ProfileScreen = () => (
  <ImageBackground
    source={{ uri: 'https://wallpaperaccess.com/full/5344388.png' }} 
    style={styles.background}
    resizeMode="cover"
  >
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/90427169_515452472728004_6171104616864808960_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHmo8228wsrUp_qArC2_z6j3qFPE1olFsreoU8TWiUWyp8JFuj_2DhaNvc2ELu_eRY4vxOw3pLJYMpf8Pl40lha&_nc_ohc=O7W9WabJH8IQ7kNvwHG-5jp&_nc_oc=AdmCibxrzYmRrR46ykSMsEK6fcHVsSV8HU8shRE-Qu7pHVSnENLJLK84Qie59fKJ9wE&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=cKOgpDEAxsYPqP0tUyxcSg&oh=00_AfEMdU19wjJ7si2b6Tq-IM0pYMzsYDdt9QpyVEatJcQFXQ&oe=6836B70E',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.infoText}>Name: Ralph Adrian Garde</Text>
        <Text style={styles.infoText}>Age: 21</Text>
        <Text style={styles.infoText}>Birthday: May 7, 2003</Text>
        <Text style={styles.infoText}>Email: garderalphadria@gmail.com</Text>
      </View>
    </SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: 'rgba(255,255,255,0.7)', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#444',
    marginVertical: 5,
  },
});

export default ProfileScreen;