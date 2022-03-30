<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="row">
                    <router-link to="/" class="col-sm-2"><img src="../assets/icons/left_icon.svg" alt="" style="height:2.5rem;width:auto"></router-link>
                    <p class="col-sm-8 h3">Все отчеты</p>
                </div>
            </div>
            <div class="col-sm-6">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search">
                    
                </form>
            </div>
            <!-- АДМИНКА -->
            <div v-if="admin==1" class="col-sm text-center mt-1">
                <p class="h5" style="font-weight:normal">Добавить <img style="cursor:pointer" src="../assets/icons/plus.svg" alt=""></p>
            </div>
            <!-- АДМИНКА -->
        </div>

        <div class="row mt-4">
           <div class="col-sm-6 row mb-3" v-for="(card,key) in news_all" :key="key">
                    <img :src="card.image" class="col-sm-6" style="height:6rem;width:auto" alt="...">
                    <div class="col-sm-5">
                        <p class="text-muted">{{card.date}} {{card.time}}</p>
                        <p class="">{{card.main}}</p>
                    </div>
                    
                    <img class="col-sm" src="../assets/icons/right_icon.svg" style="height:2rem;width:auto" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            admin: 0,
            news_all:[
                {main:'Школа государства',date:'07.11.2021',time:'12:01',image:require('../assets/images/report_img.png')},
                {main:'Моя законотворческая инициатива',date:'07.11.2021',time:'12:01',image:require('../assets/images/report_img.png')},
                {main:'Проект по грантам главы',date:'07.11.2021',time:'12:01',image:require('../assets/images/report_img.png')},
                {main:'Моя законотворческая инициатива',date:'07.11.2021',time:'12:01',image:require('../assets/images/report_img.png')},
                {main:'Проект по грантам главы',date:'07.11.2021',time:'12:01',image:require('../assets/images/report_img.png')},
            ]
        }
    },
    methods:{
        goToPaper(id){
            localStorage.setItem('paperId',id);
            this.$router.push({name:'Paper', params:{paperId: id}});
        }
    },
    created(){
        this.admin = localStorage.getItem('authed');
        localStorage.setItem('paperId',0);
    }
}
</script>

<style scoped>

</style>