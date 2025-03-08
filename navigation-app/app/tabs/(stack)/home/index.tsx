import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButtom from "@/components/shared/CustomButtom";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButtom
            className="mb-2"
            color="primary"
            onPress={() => router.push("/tabs/products")}
          >
            Products
          </CustomButtom>
          <CustomButtom
            onPress={() => router.push("/tabs/settings")}
            className="mb-2"
            color="secondary"
          >
            Ajustes
          </CustomButtom>
          <CustomButtom
            onPress={() => router.push("/tabs/profile")}
            className="mb-2"
            color="tertiary"
          >
            Profile
          </CustomButtom>
          <Link href="/tabs/products" asChild>
          <CustomButtom
          variant="text-only"
          className="mb-2"
            color="primary"
          >
            Products
          </CustomButtom>
        </Link>
        {/* <Text>index</Text>
        <Link className="mb-5" href="/products">Products</Link>
        <Link className="mb-5" href="/profile">Perfil</Link>
        <Link className="mb-5" href="/settings">Configuración</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
