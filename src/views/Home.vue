<template>
  <div class="home">
    <b-row>
    </b-row>
    <b-row>      
      <img class="mr-5" src="../assets/img/fondoalas.png" width="2000" />
    </b-row>
    <b-row>
      <b-col col lg="2"></b-col>
      <b-col cols="8" class="text-center">
        <!-- <button type="submit"  class="btn btn-primary btn-lg sharp">CONTENIDO DE REFUERZO <br> PARA EL OCTAVO AÑO</button>
        -->
         <img src="../assets/img/fondoalas2.png" alt="L1" width="100" />
        <router-link to="/submenu">
          <b-button
            >CONTENIDO DE REFUERZO <br />
            PARA EL OCTAVO AÑO</b-button>
        </router-link>
             <img src="../assets/img/fondoalas1.png" alt="L1" width="100" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <img
          class="izquierda"
          src="../assets/img/fondoalas3.png"
          width="1500"
          height="150"/>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
