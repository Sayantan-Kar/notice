import React from 'react';
import { View,ScrollView, Text, TextInput, StyleSheet} from 'react-native';





const ContactScreen = props => {
    return(
        <ScrollView>
        <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.label}>Name</Text>   
                <TextInput style={styles.input} /> 
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Phone</Text>   
                <TextInput style={styles.input} /> 
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>email</Text>   
                <TextInput style={styles.input} /> 
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Address</Text>   
                <TextInput style={styles.input} /> 
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Message</Text>   
                <TextInput style={styles.input} /> 
            </View>
        </View>   
        </ScrollView>
 )
}

ContactScreen.navigationOptions = navData => {
    return {
        headerTitle: "Welcome!",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
    }
}



const styles = StyleSheet.create({
    form: {
        margin: 20,

    },
    formControl: {
        width: '100%'
    },
    label: {
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderColor: '#ccc',
        borderBottomWidth: 2
    }
});



ContactScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Contact Us'
    }
}

export default ContactScreen;