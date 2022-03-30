<template>
    <div class="card " style="border:none">
        <div class="card-header" style="background-color:white; ">
            <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                    <a v-on:click="()=>select('m')" class="nav-link" :class="m_active ? 'active_m' : 'text_m'" >Члены МП</a>
                </li>
                <li class="nav-item">
                    <a v-on:click="()=>select('r')" class="nav-link " :class="r_active ? 'active_m' : 'text_m'">Руководство МП</a>
                </li>
                <li class="nav-item">
                    <a v-on:click="()=>select('p')" class="nav-link " :class="p_active ? 'active_m' : 'text_m'">Президиум МП</a>
                </li>
                <li class="nav-item">
                    <a v-on:click="()=>select('str')" class="nav-link" :class="str_acitve ? 'active_m' : 'text_m'">Структурные подразделения</a>
                </li>
            </ul>
        </div>
        <div v-if="m_active" class="card-body">
            <div class="row">
                <div class="col-sm-2" v-for="(member,key) in members" :key="key">
                    <img class="" :src="member.image" style="height:10rem;width:auto;" alt="">
                    <p class="mt-1">{{member.name}}</p>
                </div>
               <div class="col-sm-5" style="background-color:#35415A;padding-top:.7rem;height:3rem;width:auto">
                    <div class="row text-center">
                        <p class="col-sm" style="color:white">Все</p>
                        <router-link class="col-sm" to="/members/all"><img class="col-sm d-none d-sm-block" src="@/assets/icons/right_icon_white.svg" style="height:1.5rem;width:auto;" alt=""></router-link>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!m_active" class="card-body">
            
            <h1>Нас еще не загрузили :(</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            m_active: true,
            r_active: false,
            p_active: false,
            str_acitve: false,

            members: [
                {image:require('@/assets/images/member_image.png'),name:'Иванов Иван Иванович'},
                {image:require('@/assets/images/member_image2.png'),name:'Иванов Иван Иванович'},
                {image:require('@/assets/images/member_image.png'),name:'Иванов Иван Иванович'},
                {image:require('@/assets/images/member_image2.png'),name:'Иванов Иван Иванович'},
                {image:require('@/assets/images/member_image.png'),name:'Иванов Иван Иванович'},
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