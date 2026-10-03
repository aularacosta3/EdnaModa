import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface TarjetaProps {
  titulo: string;
  subtitulo: string;
  imagen: string;
  accion: () => void;
}

type ImagenSource = any;

const imagenesTarjetas: Record<string, ImagenSource> = {
  blusa_asimetrica: require('../assets/decor/blusa_asimetrica.jpeg'),
  vestido_satinado: require('../assets/decor/vestido_satinado.jpeg'),
  stilettos_lv: require('../assets/decor/stilettos_lv.jpeg'),
  stilettos_crema: require('../assets/decor/stilettos_crema.jpeg'),
};

export const TarjetaDinamica = ({
  titulo,
  subtitulo,
  imagen,
  accion,
}: TarjetaProps) => {
  if (!titulo || !subtitulo || !imagen || !accion) {
    return null;
  }

  const imagenSource = imagenesTarjetas[imagen] || imagenesTarjetas.blusa_asimetrica;

  return (
    <View style={styles.container}>
      <Image
        source={imagenSource}
        style={styles.imagen}
        resizeMode="contain"
      />
      <View style={styles.contenido}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>
      <Pressable onPress={accion} style={styles.areaTactil}>
        <View style={styles.areaVacia} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  contenido: {
    paddingTop: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 3,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    marginTop: 2,
  },
  areaTactil: {
    paddingTop: 20,
  },
  areaVacia: {
    width: '100%',
    height: '100%',
  },
});
