import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

type ResumeProps = {
  departure: string;
  destination: string;
  company: string;
  dateDepart: string;
  dateArrivee: string;
  seatNumber: string;
  price: string;
  onEdit: () => void;
};

const ResumeSelection = () => {
  const router = useRouter();

  const {
    departure,
    destination,
    company,
    dateDepart,
    dateArrivee,
    seatNumber,
    price,
  } = useLocalSearchParams();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Résumé de votre sélection</Text>

      <View style={styles.detailRow}>
        <Text style={styles.label}>🚌 Compagnie:</Text>
        <Text style={styles.value}>{company}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>🚏 Départ:</Text>
        <Text style={styles.value}>{departure}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>🎯 Destination:</Text>
        <Text style={styles.value}>{destination}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>🗓 Départ:</Text>
        <Text style={styles.value}>{dateDepart}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>📍 Arrivée:</Text>
        <Text style={styles.value}>{dateArrivee}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>🪑 Place n°:</Text>
        <Text style={styles.value}>{seatNumber}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>💰 Prix:</Text>
        <Text style={[styles.value, { fontWeight: "bold", color: "green" }]}>
          {price}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={()=>router.back()}>
          <Text style={styles.editButtonText}>✏️ Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/(tabs)/traject")}
        >
          <Text style={styles.nextButtonText}>Continuer vers paiement 🚀</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResumeSelection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  label: {
    fontSize: 15,
    color: "#374151",
  },
  value: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
  },
  actions: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    backgroundColor: "#E5E7EB",
    padding: 12,
    borderRadius: 8,
  },
  editButtonText: {
    color: "#111827",
    fontWeight: "600",
  },
  nextButton: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
