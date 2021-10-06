<template>
  <b-container>
    <div class="container">
      <p>INGRESA EL NOMBRE DEL JUGADOR</p>
      <input class="form-control input-sm" id="inputsm" type="text" />
      <div class="crossword mt-3 card">
        <div class="card-header">
          <h5 class="card-title">ELIGE TU PERSONAJE</h5>
        </div>
        <div class="card-body text-center">
          <b-row>
            <label>
              <input type="radio" id="radio1" name="test" value="mario"  >
              <img src="../assets/img/mario.png">
            </label>
            <label>
            <input type="radio" id="radio1" name="test" value="goku">
              <img src="../assets/img/goku.png">
            </label>
            <label>
                <input type="radio" id="radio1" name="test" value="pikachu">
                <img src="../assets/img/pikachu.png">
            </label>
          </b-row>
          <b-row>
            <label>
              <input type="radio" id="radio1" name="test" value="rosa" >
              <img src="../assets/img/rosa.png" width="200" height="200" >
            </label>
            <label>
              <input type="radio" id="radio1" name="test" value="miraculos">
              <img src="../assets/img/miraculos.png"  width="200" height="200">
            </label>
            <label>
              <input type="radio" id="radio1" name="test" value="stichrosa">
              <img src="../assets/img/stichrosa.png" width="200" height="200">
            </label>
        </b-row>                
        </div>
      
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card-body">
            <router-link to="/juegos">
              <img
                class="card-img-bottom"
                src="../assets/img/empezar.png"
                v-on:click="addStudent"
              />
            </router-link>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card-body">
            <router-link to="/submenu">
              <img class="card-img-bottom" src="../assets/img/regresar.png" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "Eligepersonaje",
  data() {
    return {
      selected: 'A',
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
        ]
    };
  },
  methods: {
    addStudent(name) {
      let inputValue = document.getElementById("inputsm").value;
      this.radioimg()
      if (inputValue == "") {
        this.$swal
          .fire({
            title: "Ingresa un nombre de jugador",
          })
          .then((result) => {
            this.$router.push("eligepersonaje");
          });
      } else {
        this.$router.push("juegos");
        localStorage.setItem("NombrePrueba", inputValue);
        localStorage.setItem("activarAhorcado", '1');
      }
    },
    radioimg(){
        var test = document.getElementsByName('test');
       //console.log('valor: '+test.value)
        var radiovalor;
       for(var i = 0;i < test.length;i++)
     {
        if(test[i].checked)
        {
        radiovalor= document.getElementById('radio1').innerHTML = test[i].value;
        }
         localStorage.setItem("Nombreimagen", radiovalor);
     }

    },
  },
  mounted() {
    //this.radioimg()
  },
};
</script>