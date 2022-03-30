<template>
    <div class="row ">
        <div class="col-sm-6">
            <p class="h3 mb-5 d-none d-sm-block" style="color:#35415A">Отчеты</p>
            <div class="d-none d-sm-block">
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
                        <p class="col-sm-10" style="color:white">Все отчеты</p>
                         <router-link class="col-sm" to='/reports/all'><img  src="@/assets/icons/right_icon_white.svg" style="height:1.5rem;width:auto;" alt=""></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-5" style="margin-left:5rem">
            <p class="h3 mb-5" style="color:#35415A">Структура</p>
            <div class="row">
                <div class="col-sm-3">
                    <img class="col-sm" src="@/assets/icons/DocumentOutline.svg" style="height:3.5rem;width:auto;" alt="">
                    <p>Положение</p>
                </div>
                <div class="col-sm-3">
                    <img class="col-sm" src="@/assets/icons/DocumentOutline.svg" style="height:3.5rem;width:auto;" alt="">
                    <p>О наградной комиссии</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <img class="col-sm" src="@/assets/icons/DocumentOutline.svg" style="height:3.5rem;width:auto;" alt="">
                    <p>Структура</p>
                </div>
                <div class="col-sm-3">
                    <img class="col-sm" src="@/assets/icons/DocumentOutline.svg" style="height:3.5rem;width:auto;" alt="">
                    <p>Регламент</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            news_all:[
                {main:'Школа государства',date:'07.11.2021',time:'12:01',image:require('@/assets/images/report_img.png')},
                {main:'Моя законотворческая инициатива',date:'07.11.2021',time:'12:01',image:require('@/assets/images/report_img.png')},
                {main:'Проект по грантам главы',date:'07.11.2021',time:'12:01',image:require('@/assets/images/report_img.png')},
            ]
        }
    }
}
</script>

<style scoped>

</style>