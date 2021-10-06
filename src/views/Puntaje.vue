<template>
  <div class="crossword mt-5 card">
    <div class="card-header">
      <h5 class="card-title">PUNTAJE</h5>
      
      <button v-on:click=" getEliminaPuntaje()" type="button" class="btn btn-outline-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
        </svg>Eliminar Puntaje
      </button>
    </div>
    <div class="card-body">
        <table class="table table-sm">
            <tbody>
                <b-table :items="items" :fields="fields">
                    <template v-slot:cell(detalle)="data">
                        <div v-if="data.item.finalScore >= '18'" >
                            Excelente puntaje :)
                        </div>
                         <div v-else-if="data.item.finalScore >= '14'" >
                            Buen puntaje pero puedes mejorarlo
                        </div>
                         <div v-else >
                            Debes reforzar lo aprendido en pagina de contenido de refuerzo
                        </div>
                    </template>
                </b-table>
            </tbody>
        </table>
    </div>
    <b-row>
         <div class="col-3">
        <div class="card">
          <router-link to="/juegos">
              <img class="card-img-bottom" src="../assets/img/regresar.png" />
          </router-link>
        </div>
      </div>

       <div class="col-3">
        <div class="card">
          <router-link to="/submenu">
              <img class="card-img-bottom" src="../assets/img/regresar.png" />
          </router-link>
        </div>
      </div>
      </b-row>
  </div>
</template>
<script>

import axios from '../plugins/axios';
export default {
    name: "Puntaje",
        data() {
            return {
                todos:null,
                items:null,
                fields: [
                { key: "username", label: "Estudiante", sortable: false},
                { key: "finalScore", label: "Puntaje Final", sortable: false },
                { key: "detalle", label: "Detalle", sortable: false },

            ]
        };
    },
  methods: {
        getConsultaPuntaje() {
            axios.get("all").then((response)=>{     
                this.items = response.data
                console.log("respuesta: "+response.data);
            });

              localStorage.setItem("activaBandera", '0');
        },
        getEliminaPuntaje() {
            localStorage.setItem("ahorcadoScored", "");

            axios.delete("deleteAll").then((response)=>{     
                this.items = response.data
            });
        },
    },
  mounted(){
      
      this.getConsultaPuntaje()
  },

};
</script>