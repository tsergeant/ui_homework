/**
 * SaveData.tsx - Screen for saving user data
 * 
 * Currently implements a simple text input that saves data as:
 *   { content: "user's text" }
 * 
 * The saveData API function accepts ANY JSON structure, so you can extend this to:
 * - Structured forms (workout type, duration, distance, etc.)
 * - Multiple input fields that create complex objects
 * - Different data types (nutrition, mood, sleep, etc.)
 * 
 * Current JSON structure being saved:
 *   json_data: { content: "..." }
 * 
 * Example of how to save structured data:
 *   await saveData(token, { 
 *     type: "workout", 
 *     kind: "run", 
 *     distance: 3.2 
 *   });
 * 
 * UX improvements to consider:
 * - Character count
 * - Auto-save draft
 * - Rich text formatting
 * - Date/time picker for timestamp
 * - Form validation
 * - Success feedback (toast instead of alert)
 */
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
      // Structure the data as an object before passing to saveData
      // This is where you could change the structure for different data types
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

