<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner position-relative">
                <div class="carousel-item active">
                <img :src="banner1" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img :src="banner2" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img :src="banner3" class="d-block w-100" alt="">
                </div>

                <!-- АДМИНКА -->
                 <div v-if="admin==1" class="position-absolute bottom-0" style="left:90%;">
                    <router-link to="/carousel/edit" class="btn" style="background-color:#35415A;color:white">Редактировать</router-link>
                </div>
                <!-- АДМИНКА -->
                
            </div>
            <button class="carousel-control-prev"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" :class="admin==1 ? 'd-none' : ''" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            admin: 0,
            banner1: '',
            banner2: '',
            banner3: '',

        }
    },
    methods:{
        change(){
            
        },
        getBanner(id,banner){
            axios
                .get(`http://localhost:3000/banner/${id}`,{headers: {"Content-Type": "application/json", responseType: 'arraybuffer'  }})
                .then(res=>{
                    const buffer = Buffer.from(res.data.data, 'base64').toString('base64');
                    if(banner==1){
                        this.banner1 = `data:image/png;base64,${buffer}`;
                    }else if(banner==2){
                        this.banner2 = `data:image/png;base64,${buffer}`;
                    }else if(banner==3){
                        this.banner3 = `data:image/png;base64,${buffer}`;
                    }
                    
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    },
    created(){
        this.admin = localStorage.getItem('authed');
        console.log(this.admin)
        this.getBanner('61f253d1a79bd814d4a5e7c9',1);
        this.getBanner('61f2546b99e3162b1ce30aa7',2);
        this.getBanner('61f2547599e3162b1ce30aaa',3);
    }
}
</script>

<style scoped>

</style>