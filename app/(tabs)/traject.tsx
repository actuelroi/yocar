import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

const Trajet = () => {
  const ticketRef = useRef(null);
  const [saving, setSaving] = useState(false);

  const handleSaveTicket = async () => {
    setSaving(true);
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission refusée", "L'application ne peut pas accéder à la galerie.");
        setSaving(false);
        return;
      }

      const uri = await captureRef(ticketRef, {
        format: "png",
        quality: 1,
      });

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Tickets", asset, false);

      Alert.alert("Succès ✅", "Le ticket a été enregistré dans votre galerie.");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
      Alert.alert("Erreur", "Une erreur est survenue lors de l'enregistrement.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.overlay}>
          <View style={styles.card} ref={ticketRef}>
            <Text style={styles.successTitle}>🎉 Félicitations</Text>
            <Text style={styles.successSubtitle}>Paiement réussi ✅</Text>

            <View style={styles.infoContainer}>
              <InfoRow label="🚏 De" value="Abidjan" />
              <InfoRow label="🎯 À" value="Bouaké" />
              <InfoRow label="🪑 Place n°" value="23" />
              <InfoRow label="📅 Départ" value="02-10-2025" />
              <InfoRow label="📍 Arrivée" value="02-10-2025" />
            </View>

            <Card style={styles.paymentCard}>
              <Text style={styles.paymentLabel}>💰 Total Paiement</Text>
              <View style={styles.amountContainer}>
                <Text style={styles.amountText}>9000 FCFA</Text>
              </View>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={60}
                color="black"
                style={{ marginTop: 10 }}
              />
            </Card>
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveTicket}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.saveButtonText}>💾 Enregistrer le ticket</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  successTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 4,
  },
  successSubtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  infoLabel: {
    fontSize: 15,
    color: "#333",
  },
  infoValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  paymentCard: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
  },
  paymentLabel: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  amountContainer: {
    backgroundColor: "green",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  amountText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Trajet;
