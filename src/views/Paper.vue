<template>
    <div class="container">
        
        <div class="row mt-5" style="margin-left:8%">
            <div class="col-sm-2">
                <router-link to="/news/all"><img src="../assets/icons/left_icon.svg" class="" style="width:3.5rem;height:auto;cursor:pointer" alt=""></router-link>
            </div>
            

            <div class="justify-content-center  col-sm-8">
                <h2 v-if="time==-1">Статьи нет</h2>
                <img :src="image" alt="" class="" style="width:44rem;height:auto;">
                <h2 class="mt-2">{{heading}}</h2>
                <p class="mt-2">
                    {{text}}
                </p>
            </div>

            <div class="col-sm-2">
                <!-- АДМИНКА -->
                        <div v-if="admin==1" class="dropdown">
                            <a class=" " style="background:white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../assets/icons/dots.svg" style="width:2rem;height:auto;" alt="">
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Редактировать</a></li>
                                <li><a class="dropdown-item" href="#">Удалить</a></li>
                            </ul>
                        </div>
                <!-- АДМИНКА -->
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
                {id:1,
                heading:'Срок прохождения первого отборочного этапа конкурса продлён до 7 ноября',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Quisque sit amet mi quam. Phasellus ut quam vitae purus tristique posuere at non risus. Aliquam efficitur efficitur tellus, nec molestie turpis laoreet in. Aliquam et sem neque. Cras sollicitudin blandit metus. Mauris purus nulla, venenatis eget urna vitae, egestas feugiat dui. Proin efficitur sed urna a condimentum. Mauris varius urna ante, sodales vehicula felis facilisis et. Curabitur nec imperdiet leo. Phasellus commodo nisi id enim sodales, iaculis egestas enim pretium.',
                date:'07.11.2021',time:'12:01',image:require('../assets/images/card_img.png')}
            ],

            heading:'',
            text:'',
            date:'',
            time:-1,
            image:''
        }
    },
    created(){
        this.admin = localStorage.getItem('authed');
        let paperId = localStorage.getItem('paperId');

        for(let i=0;i<this.news_all.length;i++){
            if(this.news_all[i].id==paperId){
                this.heading = this.news_all[i].heading;
                this.text = this.news_all[i].text;
                this.date = this.news_all[i].date;
                this.time = this.news_all[i].time;
                this.image = this.news_all[i].image;
                
                break;
            }
        }
    }
}
</script>

<style scoped>

</style>