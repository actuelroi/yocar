import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";

import { ChevronDownIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router";

const companies = [
  { name: "UTB", image: require("../../assets/images/img1.jpg") },
  { name: "AliExpress", image: require("../../assets/images/img3.jpg") },
  { name: "Gagnoa Transport", image: require("../../assets/images/img4.jpg") },
  { name: "BTS", image: require("../../assets/images/img5.jpg") },
];

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const selectedCompanyObject = companies.find(
    (item) => item.name === selectedCompany
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={styles.cardShadow}>
          <Image
            source={require("../../assets/images/img2.jpg")}
            style={styles.headerImage}
            resizeMode="cover"
          />
        </Card>

        <View style={styles.content}>
          <Text style={styles.welcome}>👋 Bienvenue Franck !</Text>
          <Text style={styles.subtitle}>
            Prêt pour le départ aujourd'hui ? Choisis ton trajet :
          </Text>

          <Select>
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder="🚏 Point de départ" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Abidjan" value="abidjan" />
                <SelectItem label="Yamoussoukro" value="yamoussoukro" />
                <SelectItem label="San Pedro" value="sanpedro" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <View style={styles.selectBlock}>
            <Select>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="🎯 Destination" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Bouaké" value="bouake" />
                  <SelectItem label="Korhogo" value="korhogo" />
                  <SelectItem label="Daloa" value="daloa" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </View>

          <Text style={styles.companyLabel}>🚌 Choisis ta compagnie :</Text>
          <View style={styles.companyList}>
            {companies.map((item, index) => {
              const isSelected = selectedCompany === item.name;
              return (
                <Pressable
                  key={index}
                  onPress={() => setSelectedCompany(item.name)}
                  style={[
                    styles.companyPressable,
                    isSelected && styles.selectedCompany,
                  ]}
                >
                  <Text
                    style={[
                      styles.companyText,
                      isSelected && styles.companyTextSelected,
                    ]}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              );
            })}
            <Pressable onPress={() => { }} style={styles.companyPressable}>
              <Text style={styles.companyText}>Autre...</Text>
            </Pressable>
          </View>

          {selectedCompanyObject && (
            <Card style={[styles.cardShadow, { marginTop: 20 }]}>
              <Image
                source={selectedCompanyObject.image}
                style={styles.companyImage}
                resizeMode="cover"
              />
            </Card>
          )}

          <View style={{ alignItems: "center", justifyContent: 'center', padding: 4 }}>
            <Button
              size="md"
              variant="solid"
              action="primary"
              onPress={() => router.push({
                pathname: "/resume",
                params: {
                  departure: "Abidjan",
                  destination: "Bouaké",
                  company: "UTB",
                  dateDepart: "02-10-2025",
                  dateArrivee: "02-10-2025",
                  seatNumber: "23",
                  price: "9000 FCFA",
                },
              })}
              style={styles.nextButton}
            >
              <ButtonText style={{ color: 'white' }}> Suivant 🚀</ButtonText>
            </Button>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  cardShadow: {
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 16,
    marginHorizontal: 5,
    marginTop: 16
  },
  headerImage: {
    width: "100%",
    height: 180,
  },
  content: {
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 20,
  },
  selectBlock: {
    marginTop: 16,
  },
  companyLabel: {
    marginTop: 28,
    marginBottom: 12,
    fontWeight: "600",
    fontSize: 16,
    color: "#1F2937",
  },
  companyList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  companyPressable: {
    backgroundColor: "#E5E7EB",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    margin: 4,
  },
  selectedCompany: {
    backgroundColor: "#2563EB",
  },
  companyText: {
    color: "#111827",
    fontSize: 14,
  },
  companyTextSelected: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  companyImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
  },
  nextButton: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    padding: 10,

  },
});
