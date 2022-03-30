<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="row">
                    <router-link to="/" class="col-sm-2"><img src="../assets/icons/left_icon.svg" alt="" style="height:2.5rem;width:auto"></router-link>
                    <p class="col-sm-8 h3">Все новости</p>
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

        <div class="row mt-2 ">
            <div class="card col-sm-3 mt-3" style="width:min-content;margin-left:1rem" v-for="(card,key) in news_arr" :key="key">
                <img :src="card.image" class="card-img-top" style="height:auto;width:18rem" alt="...">
                <div class="card-body" style="cursor:pointer" v-on:click="()=>goToPaper(card.id)">
                    <p class="text-muted">{{card.date}} {{card.time}}</p>
                    <p class="card-text">{{card.main}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            admin: 0,
            news_arr:[
                {id:1,main:'Срок прохождения первого отборочного этапа конкурса продлён до 7 ноября',date:'07.11.2021',time:'12:01',image:require('../assets/images/card_img.png')},
                {id:2,main:'Выездное заседание оргкомитета Николаевского форума',date:'07.11.2021',time:'12:01',image:require('../assets/images/card_img3.png')},
                {id:3,main:'Выездное заседание оргкомитета Николаевского форума',date:'07.11.2021',time:'12:01',image:require('../assets/images/card_img3.png')},
                {id:4,main:'Выездное заседание оргкомитета Николаевского форума',date:'07.11.2021',time:'12:01',image:require('../assets/images/card_img3.png')},
                {id:5,main:'Выездное заседание оргкомитета Николаевского форума',date:'07.11.2021',time:'12:01',image:require('../assets/images/card_img3.png')},
            ],
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