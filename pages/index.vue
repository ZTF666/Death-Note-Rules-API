<template>
 
      <v-container class="mt-15 ">
        <v-row >
          <v-col>
            <v-sheet min-height="50vh" rounded="lg" class="cf">
              <v-card-text class="headline font-weight-bold text-md-center ">
                <br><br><br>
                   {{RanRule}}
              </v-card-text>
              

              <div class="text-md-center mt-10 flex">
                <v-btn icon color="transparent"  x-large @click.prevent="RandomRule()" >
                    <v-img src="/ryuk.png"
                     max-height="100"
                    max-width="100"></v-img>
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
   
</template>

<script>
export default {
  // head: {
  //   title: 'Hadiths Lite Landing Page',
  //   meta: [
  //     {
  //       hid: 'Landing Page',
  //       name: 'Landing Page',
  //       content: 'Random Hadith from Al Damiri',
  //     },
  //   ],
  // },
  data: () => ({
   
    api: 'http://localhost:3000/rules',
    Rules:[],
    Rsize:'',
    RanRule:[],
    
  }),
  methods:{
    GetRule(){
        fetch(
          `${this.api}`
        )
          .then(res => {
            return res.json();
          })
          .then(this.setResults);
    },
     setResults(results) {
     
      this.Rules=results
      this.Rsize=this.Rules.length
      
      this.RandomRule()
     
    },
    RandomRule(){
    let X = Math.floor((Math.random() * parseInt(this.Rsize)) + 1)
    this.RanRule=this.Rules[X].rule
    this.Rules.splice(X,1)
    this.Rsize=this.Rsize-1
    // to check if things are deleted and the size is reduced
    console.log(this.Rsize)
    console.log(this.Rules.length)
    }
  },
  mounted(){
    if(this.Rules.length<=0){
      this.GetRule()
      console.log('everything is a-okay')}
  }
}
</script>
<style scoped>
.cf{
 
    opacity: .9;
}
</style>