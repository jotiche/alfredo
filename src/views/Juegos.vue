<template>
  <div class="container-fluid">

           <img class="card-img-bottom" width="200" height="150" src="../assets/img/juguemosfondo.png" />
 
     
    <div class="row justify-content-center">
        <img class="card-img-bottom" width="100" height="150" src="../assets/img/animalitosfondo.png" />
        
        <div class="col-sm-5">
          <di v-if="habilitaAhorcado === '1'">
            <div class="card-body">
              <router-link to="/ahorcado">
                  <img class="card-img-bottom" src="../assets/img/nivel1fondo.png" />
              </router-link>
            </div>
          </di>
          <div v-else>
            <div class="card-body">
              <img class="card-img-bottom" src="../assets/img/nivel1fondo.png" />
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <di v-if="habilitaMemorama === '1'">
              <div class="card-body">
                  <router-link to="/memorama">
                    <img class="card-img-bottom" src="../assets/img/nivel2fondo.png" />
                  </router-link>
              </div>
          </di>
          <div v-else>
             <div class="card-body">
                <img class="card-img-bottom" src="../assets/img/nivel2fondo.png" />
              </div>
          </div>
        </div>
        <div class="col-sm-2">
           <div>
          <div v-if="activarBande === '1'" >
            <router-link to="/felicidades">
                <img class="card-img-bottom" src="../assets/img/bandera.png" />
            </router-link>
          </div>
          <div v-else>
                <img class="card-img-bottom" src="../assets/img/bandera.png" />
          </div>

          </div>
      </div>
      
    </div>
         <div class="col-3">
        <div >
           <b-form-input class="text-center text-primary" disabled  v-model="nombreJugador"> </b-form-input>

            <div v-if="nombreImagen === 'mario'" >
             <img class="card-img-bottom" src='../assets/img/mario.png'/>
            </div>
            <div v-if="nombreImagen === 'goku'" >
             <img class="card-img-bottom" src='../assets/img/goku.png'/>
            </div>
            <div v-if="nombreImagen === 'pikachu'" >
             <img class="card-img-bottom" src='../assets/img/pikachu.png'/>
            </div>
            <div v-if="nombreImagen === 'rosa'" >
             <img class="card-img-bottom" src='../assets/img/rosa.png'/>
            </div>
            <div v-if="nombreImagen === 'miraculos'" >
             <img class="card-img-bottom" src='../assets/img/miraculos.png'/>
            </div>
            <div v-if="nombreImagen === 'stichrosa'" >
             <img class="card-img-bottom" src='../assets/img/stichrosa.png'/>
            </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <router-link to="/eligepersonaje">
              <img class="card-img-bottom" src="../assets/img/regresar.png"  />
          </router-link>
        </div>
      </div>

  </div>
</template>
<script>
export default {
  name: "Juegos",
          data() {
          
            return {
               nombreJugador: null,
               nombreImagen:null,
               rutaImagen:null,
               activarBande: 0,
               habilitaMemorama:0,
               habilitaAhorcado:0,


        };
    },
  methods: {
      loadStudent(){
          this.nombreJugador=localStorage.getItem('NombrePrueba')
          console.log('Nombre de jugador: '+this.nombreJugador)
          
          this.nombreImagen=localStorage.getItem('Nombreimagen')
          console.log('Nombre de la imagen: '+this.nombreImagen)
          this.rutaImagen='../assets/img/goku.png'

          this.activarBande=localStorage.getItem('activaBandera')
          console.log('Valor Bandera: '+this.activarBande)

          this.habilitaAhorcado=localStorage.getItem('activarAhorcado')
          console.log('Valor Ahorcado: '+this.habilitaAhorcado)

          this.habilitaMemorama=localStorage.getItem('activarMemorama')
          console.log('Valor Ahorcado: '+this.habilitaMemorama)
        },
    },
  mounted(){
    this.loadStudent();
  },
};
</script>