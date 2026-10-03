import React from 'react';
import { View, FlatList, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TarjetaDinamica } from '../components/TarjetaDinamica';

type ImagenPrenda = any;

const imagenesPrendas: Record<string, ImagenPrenda> = {
  blusa_asimetrica: require('../assets/decor/blusa_asimetrica.jpeg'),
  vestido_satinado: require('../assets/decor/vestido_satinado.jpeg'),
  stilettos_lv: require('../assets/decor/stilettos_lv.jpeg'),
  stilettos_crema: require('../assets/decor/stilettos_crema.jpeg'),
};

interface Prenda {
  id: number;
  nombre: string;
  color: string;
}

export const HomeScreen = () => {
  const navigation = useNavigation();

  const prendas: Prenda[] = [
    { id: 1, nombre: "Blusa Asimetrica", color: '#E8A8D0' },
    { id: 2, nombre: "Vestido Satinado", color: '#F5F5F5' },
    { id: 3, nombre: "Stilettos LV", color: '#B0B0B0' },
    { id: 4, nombre: "Stilettos Crema", color: '#FFF5E6' },
  ];

  const logout = () => {
    // @ts-ignore
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloApp}>👠 Edna's lab</Text>
        <Pressable style={styles.btnCerrar} onPress={logout}>
          <Text style={styles.txtCerrar}>Cerrar</Text>
        </Pressable>
      </View>

      <FlatList
        data={prendas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TarjetaDinamica
            titulo={item.nombre}
            subtitulo="Prenda del armario"
            imagen={item.nombre.toLowerCase().replace(/ /g, '_')}
            accion={() => {}}
          />
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.marca}>Edna's lab • Colección Exclusiva</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    padding: 30,
    backgroundColor: '#1a1a2e',
    borderBottomWidth: 3,
    borderBottomColor: '#ff6b6b',
    marginBottom: 40,
  },

  tituloApp: {
    fontSize: 24,
    color: '#ff6b6b',
    fontWeight: '800',
    letterSpacing: 2,
  },

  grid: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },

  footer: {
    padding: 20,
    backgroundColor: '#1a1a2e',
    marginTop: 20,
  },

  btnCerrar: {
    marginLeft: 'auto',
  },

  txtCerrar: {
    color: '#ff6b6b',
    fontWeight: '600',
    fontSize: 13,
  },

  marca: {
    color: '#ff6b6b',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
  },
});