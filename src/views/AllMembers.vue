<template>
    <div class="container">
        <div class="card " style="border:none">
            <div class="card-header " style="background-color:white; ">
                <router-link to="/" ><img src="../assets/icons/left_icon.svg" alt="" style="height:2.5rem;width:auto"></router-link>
                <ul class="nav nav-pills card-header-pills justify-content-center mt-4">
                    <li class="nav-item" >
                        <a v-on:click="()=>select('m')" class="nav-link" :class="m_active ? 'active_m' : 'text_m'" >Члены МП</a>
                    </li>
                    <li class="nav-item" style="margin-left:15%">
                        <a v-on:click="()=>select('r')" class="nav-link " :class="r_active ? 'active_m' : 'text_m'">Руководство МП</a>
                    </li>
                    <li class="nav-item" style="margin-left:15%">
                        <a v-on:click="()=>select('p')" class="nav-link " :class="p_active ? 'active_m' : 'text_m'">Президиум МП</a>
                    </li>
                    <li class="nav-item" style="margin-left:15%">
                        <a v-on:click="()=>select('str')" class="nav-link" :class="str_acitve ? 'active_m' : 'text_m'">Структурные подразделения</a>
                    </li>
                </ul>
            </div>
            <div class="row mt-2">
                <div class="col-sm-10">
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
            <div v-if="m_active" class="card-body">
                <div class="row">
                    <div class="col-sm-2 position-relative" v-for="(member,key) in members" :key="key">
                        
                        <!-- АДМИНКА -->
                        <div v-if="admin==1" class="dropdown position-absoulute" style="left:60%;top:18%">
                            <a class="btn rounded-circle " style="background:white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../assets/icons/dots.svg" alt="">
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Редактировать</a></li>
                                <li><a class="dropdown-item" href="#">Удалить</a></li>
                            </ul>
                        </div>
                        <!-- АДМИНКА -->

                        <img class="" :src="member.image" style="height:10rem;width:auto;" alt="">
                        <p class="mt-1">{{member.name}}</p>
                    </div>
                </div>
            </div>

            <div v-if="!m_active" class="card-body">
                
                <h1>Нас еще не загрузили :(</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            admin:0,
            m_active: true,
            r_active: false,
            p_active: false,
            str_acitve: false,

            members: [
                {image:require('../assets/images/member_image.png'),name:'Иванов Иван Иванович'},
                {image:require('../assets/images/member_image2.png'),name:'Иванов Иван Иванович'},
                {image:require('../assets/images/member_image.png'),name:'Иванов Иван Иванович'},
                {image:require('../assets/images/member_image2.png'),name:'Иванов Иван Иванович'},
                {image:require('../assets/images/member_image.png'),name:'Иванов Иван Иванович'},
                {image:require('../assets/images/member_image2.png'),name:'Иванов Иван Иванович'},
                {image:require('../assets/images/member_image.png'),name:'Иванов Иван Иванович'},
                
            ]
        }
    },
    methods:{
        select: function(id) {
            if(id=='m'){
                this.m_active = true;
                this.r_active = false;
                this.p_active = false;
                this.str_acitve = false;
            }else if(id=='r'){
                this.m_active = false;
                this.r_active = true;
                this.p_active = false;
                this.str_acitve = false;
            }else if(id=='p'){
                this.m_active = false;
                this.r_active = false;
                this.p_active = true;
                this.str_acitve = false;
            }else if(id=='str'){
                this.m_active = false;
                this.r_active = false;
                this.p_active = false;
                this.str_acitve = true;
            }
        }
    },
     created(){
        this.admin = localStorage.getItem('authed');
        localStorage.setItem('paperId',0);
    }
}
</script>

<style scoped>
    .active_m{
        background-color:#35415A;
        color:white;
        cursor: pointer;
    }
    .text_m{
        color:black;
        cursor: pointer;
    }
</style>