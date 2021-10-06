 <template>
   <div class=”container-fluid”>
     <div class=”container”>     
      <div class="row justify-content-center">
          <img class="card-img-bottom"  width="100" height="70" src="../assets/img/frase1.png" />
          <img class="card-img-bottom" width="100" height="150" src="../assets/img/floresrosas.png" />
          <div class="col-sm-4">
              <div class="card-body">
                 <router-link to="/video1">
                <img class="card-img-bottom" src="../assets/img/cuadroMano.png" />
                </router-link>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="card-body">
                 <router-link to="/video2">
                <img class="card-img-bottom" src="../assets/img/nivelestroficos.png" />
                </router-link>
              </div>
          </div>
          <img class="card-img-bottom"  width="100" height="70" src="../assets/img/frase2.png" />
          <img class="card-img-bottom" width="100" height="150" src="../assets/img/floresrosas.png" />  
          <div class="col-sm-4">
              <div class="card-body">
               <router-link to="/video3">
                <img class="card-img-bottom" src="../assets/img/cadenastroficas.png" />
                 </router-link>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="card-body">
                 <router-link to="/video4">
                <img class="card-img-bottom" src="../assets/img/redestroficas.png" />
                 </router-link>
              </div>
          </div>    
          <img class="card-img-bottom"  width="100" height="70" src="../assets/img/frase3.png" />
          <img class="card-img-bottom" width="100" height="150" src="../assets/img/floresrosas.png" />
          <div class="col-sm-6">
              <div class="card-body">
                 <router-link to="/video5">
                <img class="card-img-bottom" src="../assets/img/causasdegradacion.png" />
                 </router-link>
              </div>
          </div>
          <div class="col-sm-6">
              <div class="card-body">
                 <router-link to="/video6">
                <img class="card-img-bottom" src="../assets/img/efectosdegradacion.png" />
                 </router-link>
              </div>
          </div>
      </div>
      <div class="row justify-content-center">
            <router-link to="/eligepersonaje">
              
                <img class="card-img-bottom" src="../assets/img/barrazul.png" />
              
            </router-link>
      </div>
   </div>
  </div>
</template>
<script>
export default {
  name: "Submenu",
};
</script>