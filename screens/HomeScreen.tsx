import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Pressable, Image as ImageComponent } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Mapeo estático de imágenes - REQUIRED for Metro bundler
const imagenesPrendas = {
  blusa_asimetrica: require('../assets/decor/blusa_asimetrica.jpeg'),
  vestido_satinado: require('../assets/decor/vestido_satinado.jpeg'),
  stilettos_lv: require('../assets/decor/stilettos_lv.jpeg'),
  stilettos_crema: require('../assets/decor/stilettos_crema.jpeg'),
};

// Estructura de ropa EDNA'S LAB
interface Prenda {
  id: number;
  nombre: string;
  imagenKey: keyof typeof imagenesPrendas;
  color: string;
}

export const HomeScreen = () => {
  const navigation = useNavigation();
  
  // Prendas EDNA'S LAB - tus 4 imágenes exclusivas
  const prendas: Prenda[] = [
    { id: 1, nombre: "Blusa Asimétrica", imagenKey: 'blusa_asimetrica', color: '#E8A8D0' },   // Rosa pastel
    { id: 2, nombre: "Vestido Satinado", imagenKey: 'vestido_satinado', color: '#F5F5F5' },   // Blanco roto
    { id: 3, nombre: "Stilettos LV", imagenKey: 'stilettos_lv', color: '#B0B0B0' },           // Negro lujo
    { id: 4, nombre: "Stilettos Crema", imagenKey: 'stilettos_crema', color: '#FFF5E6' },       // Crema elegante
  ];

  const logout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Header EDNA'S LAB */}
      <View style={styles.header}>
        <Text style={styles.tituloApp}>👠 Edna's lab</Text>
        <Pressable style={styles.btnCerrar} onPress={logout}>
          <Text style={styles.txtCerrar}>Cerrar</Text>
        </Pressable>
      </View>
      
      {/* Fondo sutil */}
      <View style={styles.fondoSutil} />
      
      {/* Lista de prendas EDNA'S LAB con imágenes reales */}
      <FlatList
        data={prendas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <CustomButton
            title={item.nombre}
            variant="primary"
            style={styles.itemPrenda}
          >
            <ImageComponent
              source={imagenesPrendas[item.imagenKey]}
              style={styles.imagenPrenda}
            />
          </CustomButton>
        )}
      />
      
      {/* Footer con información */}
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
  
  // Header marca EDNA'S LAB
  header: {
    padding: 30,
    backgroundColor: '#1a1a2e',
    borderBottomWidth: 3,
    borderBottomColor: '#ff6b6b',
    marginBottom: 40,
  },
  
  // Título del header
  tituloApp: {
    fontSize: 24,
    color: '#ff6b6b',
    fontWeight: '800',
    letterSpacing: 2,
  },
  
  // Botón cerrar
  btnCerrar: {
    marginLeft: 'auto',
  },
  
  txtCerrar: {
    color: '#ff6b6b',
    fontWeight: '600',
    fontSize: 13,
  },
  
  // Fondo sutil de la pantalla
  fondoSutil: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f8f9fa',
  },
  
  // Grid de prendas
  grid: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  
  // Cada prenda estilo EDNA'S LACON con imagen
  itemPrenda: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ff6b6b',
    opacity: 0.9,
  },
  
  // Imagen de la prenda en el botón
  imagenPrenda: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: 12,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  
  // Título de la prenda - debajo de la imagen
  tituloPrenda: {
    color: '#1a1a2e',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 0,
    letterSpacing: 0.5,
    textAlign: 'center',
    width: width * 0.45,
  },
  
  // Footer de marca
  footer: {
    padding: 20,
    backgroundColor: '#1a1a2e',
    marginTop: 20,
  },
  
  // Texto de marca
  marca: {
    color: '#ff6b6b',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
  },
});