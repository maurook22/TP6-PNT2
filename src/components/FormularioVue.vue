<template>

  <section class="src-components-formularioVue">

    <div class="jumbotron">
      <h2>Alta Personas</h2>
      <hr />

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- CAMPO NOMBRE -->
          <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    v-model="$v.f.nombre.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos 5 caracteres</div>
                    <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener como mucho 15 caracteres</div>
                </div>
          </div>
          <!--  CAMPO EDAD  -->
          <div class="form-group">
                <label for="edad">Edad</label>
                <input 
                    type="number"
                    id="edad"
                    class="form-control"
                    v-model="$v.f.edad.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.edad.$error && $v.f.edad.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.edad.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.edad.between.$invalid">La edad debe estar entre los 18 y los 120 años</div>
                </div>
          </div>
          <!--  CAMPO MAIL  -->
          <div class="form-group">
                <label for="edad">Mail</label>
                <input 
                    type="text"
                    id="edad"
                    class="form-control"
                    v-model="$v.f.mail.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.mail.$error && $v.f.mail.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.mail.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.mail.email.$invalid">Debe introducir un mail valido</div>
                </div>
          </div>
          <!-- BOTÓN ENVÍO  -->
          <div class="form-group">
                <input 
                    type="submit"
                    :disabled="$v.f.$invalid || $v.f.mail.$model == '' || $v.f.edad.$model == '' || $v.f.nombre.$model == ''"
                    class="btn btn-success mt-4"
                    value="Enviar"
                >
          </div>
      </form>

      <!--<pre>{{$v}}</pre>-->

    </div>

  </section>

</template>

<script>

  import { required, minLength, maxLength, between, email } from '@vuelidate/validators'

  export default  {

    name: 'src-components-formularioVue',

    props: [],

    mounted () {

        this.getDatosFormAxios()

    },
    data () {

      return {

          f: this.resetForm(),
          url : 'https://5f7e9ef90198da0016893b7f.mockapi.io/Personas'

      }

    },
    validations: {

      f: {

        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },

        edad: { 
          required,
          between: between(18,120)
        },

        mail: { 
          required,
          email
        }

      }
      
    },
    methods: {

        /* POST datos */
        sendDatosFormAxios(datos) {
            this.axios.post(this.url, datos, {'content-type': 'application/json'})
            .then(res => console.log(res.data))
            .catch(error => console.log('HTTP POST ERROR', error))
        },

        /* GET datos */
        getDatosFormAxios() {
            this.axios(this.url)
            .then(res => console.log(res.data))
            .catch(error => console.log('HTTP GET ERROR', error))
        },
   
        /* Envio form */
        enviar() {
            let form = {
                nombre: this.$v.f.nombre.$model,
                edad: this.$v.f.edad.$model,
                mail: this.$v.f.mail.$model
            }
            this.sendDatosFormAxios(form)
            console.log(form)
            this.f = this.resetForm()
            this.$v.$reset()
        },
        
        /* Inicio de form */
        resetForm() {
            return {
               nombre: '',
               edad : '',
               mail: ''
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formularioVue {

  }

  .jumbotron {
    background-color: rgb(114, 19, 51);
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  pre {
    color: white;
  }

</style>
