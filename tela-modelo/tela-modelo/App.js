import { StyleSheet, StatusBar, SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';

export default function App() {
  const handleResetPassword = () => {    
  };

  return (
    <SafeAreaView>
      <StatusBar/>

      {/* Quadrado A com a imagem dentro */}
      <View style={styles.quadradoA}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn.icon-icons.com/icons2/510/PNG/512/images_icon-icons.com_50365.png' }} // Imagem de exemplo
        />
      </View>

      {/* Contêiner das bolinhas na mesma linha */}
      <View style={styles.bolinhasContainer}>
        <View style={styles.bolinha1} />
        <View style={styles.bolinha2} />
        <View style={styles.bolinha2} />
      </View>

      {/* Título com margem */}
      <Text style={styles.title}>Create a prototype in just a few minutes</Text>

      {/* Subtítulo com margem */}
      <Text style={styles.subtitle}>Enjoy these pre-made components and worry only about creating the best product ever.</Text>

      {/* Botão de resetar senha com margem */}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.quadradoB}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  quadradoA: {
    backgroundColor: "#EAF2FF",
    height: 500,
    justifyContent: 'center',  
    alignItems: 'center',      
    padding: 20, 
  },
  quadradoB: {
    backgroundColor: "#ffffff",
    height: 300,
  },
  image: {    
    width: 35,       
    height: 35,      
    marginBottom: 20,  
  },
  bolinhasContainer: {
    flexDirection: 'row',       
    marginTop: 10,              
    marginTop: 30,
    marginHorizontal: 20, 
  },
  bolinha1: {
    borderRadius: 24,
    width: 8,   
    height: 8,  
    backgroundColor: '#006FFD',
    marginHorizontal: 5, 
  },
  bolinha2: {
    borderRadius: 24,
    width: 8,   
    height: 8,  
    backgroundColor: '#808080',
    marginHorizontal: 5, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20, 
    marginHorizontal: 20, 
  },
  subtitle: {    
    fontSize: 16,      
    marginBottom: 30, 
    color: '#555',  
    marginHorizontal: 20, 
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#006FFD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 30, 
    marginHorizontal: 20, 
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});