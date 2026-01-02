/**
 * ShowData.tsx - Screen displaying all saved data entries
 * 
 * Fetches and displays all data entries saved by the current user.
 * 
 * Current implementation:
 * - Shows simple list of entries
 * - Displays content and timestamp
 * - Handles empty state
 * 
 * Data structure from API:
 * Each item has: { id, user_id, json_data, timestamp }
 * - json_data contains whatever structure was saved (currently { content: "..." })
 * - timestamp is ISO format date string
 * 
 * UX improvements to consider:
 * - Pull-to-refresh functionality
 * - Filtering/sorting options
 * - Search functionality
 * - Pagination (API supports skip/limit)
 * - Date grouping (group by day/week)
 * - Card-based layout instead of list
 * - Swipe actions (edit/delete)
 * - Better empty state (illustration, call-to-action)
 * - Loading skeleton instead of spinner
 * - Error retry button
 */
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useAuth } from '../context/AuthContext';
import { getSavedData, SavedData } from '../api/api';

type ShowDataScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShowData'>;

export default function ShowData() {
  const navigation = useNavigation<ShowDataScreenNavigationProp>();
  const { token } = useAuth();
  const [data, setData] = useState<SavedData[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data when screen first appears
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    if (!token) {
      Alert.alert('Error', 'You must be logged in to view data');
      navigation.navigate('Login');
      return;
    }

    setLoading(true);
    try {
      const savedData = await getSavedData(token);
      setData(savedData);
    } catch (error) {
      Alert.alert('Error', 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Saved Data</Text>
        {data.length === 0 ? (
          <Text style={styles.emptyText}>No saved data found.</Text>
        ) : (
          data.map((item, index) => (
            <View key={item.id || index} style={styles.dataItem}>
              {/* 
                Display content if it exists, otherwise show the full JSON structure
                As you add different data types, you'll want to render them differently
                (e.g., workout data might show distance + duration, nutrition might show calories)
              */}
              <Text style={styles.dataContent}>
                {item.json_data?.content || JSON.stringify(item.json_data)}
              </Text>
              {item.timestamp && (
                <Text style={styles.dataDate}>
                  {new Date(item.timestamp).toLocaleString()}
                </Text>
              )}
            </View>
          ))
        )}
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
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  dataItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 4,
  },
  dataContent: {
    fontSize: 16,
    marginBottom: 8,
  },
  dataDate: {
    fontSize: 12,
    color: '#666',
  },
});

