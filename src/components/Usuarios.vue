<template>

  <section class="src-components-usuarios">

    <div class="card" >

      <div class="table-responsive">

        <table v-if="personas.length > 0" class="table no-wrap user-table mb-0">

          <thead>
            <tr>
              <th scope="col" class="border-0 text-uppercase font-medium">
                ID
              </th>
              <th scope="col" class="border-0 text-uppercase font-medium">
                Nombre
              </th>
              <th scope="col" class="border-0 text-uppercase font-medium">
                Edad
              </th>
              <th scope="col" class="border-0 text-uppercase font-medium">
                Email
              </th>
            </tr>
          </thead>

          <tbody>

            <tr v-for="persona in personas" :key="persona.id">
              <td><h5 class="font-medium mb-0">{{ persona.id }}</h5></td>
              <td><h5 class="font-medium mb-0">{{ persona.nombre }}</h5></td>
              <td><span class="text-muted">{{ persona.edad }}</span></td>
              <td><span class="text-muted">{{ persona.mail }}</span></td>
            </tr>

          </tbody>

        </table>
        
        <div v-else class="alert alert-warning" role="alert">
            NO SE ENCONTRARON PERSONAS
        </div> 
      </div>

    </div>

  </section>

</template>

<script>
export default {
  name: "src-components-usuarios",
  props: [],
  mounted() {
    this.getDatosFormAxios()
  },
  data() {
    return {
      largo: 3,
      url : 'https://5f7e9ef90198da0016893b7f.mockapi.io/Personas',
      personas: []
    };
  },
  methods: {
    getDatosFormAxios() {
            this.axios(this.url)
            .then(res => {
              this.personas = res.data
              console.log(this.personas)
            })
            .catch(error => console.log('HTTP GET ERROR', error))
        }
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-usuarios {
}
</style>
