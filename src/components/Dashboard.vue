<template>
  <div style="text-align:center;height:100%">
    <hr />
    <div class="layout-topbar2">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" placeholder="Search People" @keyup.native.enter="search($event)" />
      </span>
    </div>
    <div class="cards" v-for="r in results" :key="r.subjectId">
      <Card class="card">
        <template slot="header">
          <div v-if="r.picture !== null">
            <img class="img" :src="r.picture" />
          </div>
          <div v-else>
            <img class="img" src="../assets/default.jpg" />
          </div>
        </template>
        <template slot="title" style="font-size: 10px">{{r.name}}</template>
        <template slot="content"></template>
        <template slot="footer">
          <Button icon="pi pi-check" label="View" @click="openBio(r.username)" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import TorreService from "../services/TorreService";

export default {
  data() {
    return {
      results: []
    };
  },
  methods: {
    async search(event) {
      this.results = await TorreService.postPeople({
        name: { term: event.target.value },
        limit: 10
      }).catch(e => {
        console.log(e);
      });
    },
   openBio(username){
      console.log(username)
     this.bio =  TorreService.getBio(username);
     //this.$router.replace({name:'bio', params:{}});


    }
  }
};
</script>

