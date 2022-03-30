<template>
    <div class="container">
        <div class="mb-5">
            <p class="h3" style="color:#35415A">Новости</p>
        </div>

        <div class="row">
            <div class="card col-sm-3" style=" margin-right:1rem" v-for="(card,key) in news_arr" :key="key">
                <img :src="card.image" class="card-img-top" style="height:auto;width:auto" alt="...">
                <div class="card-body" style="cursor:pointer" v-on:click="()=>goToPaper(card.id)">
                    <p class="text-muted">{{card.date}} {{card.time}}</p>
                    <p class="card-text">{{card.main}}</p>
                </div>
            </div>
            <div class="col-sm-5 d-none d-sm-block">
                <div class="row mb-3" v-for="(card,key) in news_all" :key="key">
                    <img :src="card.image" class="col-sm-6" style="height:6rem;width:auto" alt="...">
                    <div class="col-sm-5">
                        <p class="text-muted">{{card.date}} {{card.time}}</p>
                        <p class="">{{card.main}}</p>
                    </div>
                    
                    <img class="col-sm" src="@/assets/icons/right_icon.svg" style="height:2rem;width:auto" alt="">
                </div>
                <div class="" style="background-color:#35415A;padding-top:1rem;padding-left:1.5rem">
                    <div class="row">
                        <p class="col-sm-10" style="color:white">Все новости</p>
                        <router-link class="col-sm" to="/news/all"><img  src="@/assets/icons/right_icon_white.svg" style="height:1.5rem;width:auto;" alt=""></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news_arr:[
                {id:1,main:'Срок прохождения первого отборочного этапа конкурса продлён до 7 ноября',date:'07.11.2021',time:'12:01',image:require('@/assets/images/card_img.png')},
                {id:2,main:'Срок прохождения первого отборочного этапа конкурса продлён до 7 ноября',date:'07.11.2021',time:'12:01',image:require('@/assets/images/card_img.png')},
            ],
            news_all:[
                {main:'Бесплатный проезд волонтерам',date:'07.11.2021',time:'12:01',image:require('@/assets/images/card_img2.png')},
                {main:'Бесплатный проезд волонтерам',date:'07.11.2021',time:'12:01',image:require('@/assets/images/card_img2.png')},
                {main:'Бесплатный проезд волонтерам',date:'07.11.2021',time:'12:01',image:require('@/assets/images/card_img2.png')},
            ]
        }
    },
    methods:{
        goToPaper(id){
            localStorage.setItem('paperId',id);
            this.$router.push({name:'Paper', params:{paperId: id}});
        }
    }
}
</script>

<style scoped>
</style>