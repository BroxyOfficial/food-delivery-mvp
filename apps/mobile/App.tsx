import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const restaurants = [
  { name: 'Sunrise Bites', cuisine: 'Indian', eta: '25 min', rating: '4.8' },
  { name: 'Green Bowl', cuisine: 'Healthy', eta: '18 min', rating: '4.7' },
  { name: 'Pizza Harbor', cuisine: 'Italian', eta: '30 min', rating: '4.9' },
];

export default function App() {
  return (
    <View style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Good evening</Text>
        <Text style={styles.title}>What would you like to eat?</Text>

        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search dishes or restaurants</Text>
        </View>

        <View style={styles.categoryRow}>
          {['Burger', 'Pizza', 'Healthy', 'Dessert'].map((item) => (
            <TouchableOpacity key={item} style={styles.categoryChip}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Popular restaurants</Text>

        {restaurants.map((restaurant) => (
          <View key={restaurant.name} style={styles.card}>
            <View style={styles.cardImage} />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{restaurant.name}</Text>
                <Text style={styles.rating}>⭐ {restaurant.rating}</Text>
              </View>
              <Text style={styles.meta}>{restaurant.cuisine}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.eta}>{restaurant.eta}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff7ed',
  },
  container: {
    padding: 24,
    paddingBottom: 48,
  },
  headerText: {
    color: '#f97316',
    fontWeight: '700',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 18,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    marginBottom: 20,
  },
  searchText: {
    color: '#64748b',
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  categoryChip: {
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  categoryText: {
    color: '#9a4d17',
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  cardImage: {
    height: 150,
    backgroundColor: '#fdba74',
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },
  rating: {
    color: '#111827',
    fontWeight: '700',
  },
  meta: {
    color: '#64748b',
    marginTop: 6,
  },
  cardFooter: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eta: {
    color: '#f97316',
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#f97316',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
