import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useAuth } from '../context/AuthContext';
import { saveData } from '../api/api';

type SaveDataScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SaveData'>;

export default function SaveData() {
  const navigation = useNavigation<SaveDataScreenNavigationProp>();
  const { token } = useAuth();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!content.trim()) {
      Alert.alert('Error', 'Please enter some content');
      return;
    }

    if (!token) {
      Alert.alert('Error', 'You must be logged in to save data');
      navigation.navigate('Login');
      return;
    }

    setLoading(true);
    try {
      await saveData(token, { content });
      Alert.alert('Success', 'Data saved successfully!');
      setContent('');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Save Data</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter your data here..."
          value={content}
          onChangeText={setContent}
          multiline={true}
          numberOfLines={10}
          textAlignVertical="top"
        />
        <View style={styles.buttonContainer}>
          <Button
            title={loading ? 'Saving...' : 'Save'}
            onPress={handleSave}
            disabled={loading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
    minHeight: 200,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

