<template>
    <div class="container  border mt-5 rounded pt-3" style="background-color:white">
        <div class="container mt-5 row">
            <div class="col-sm-10">
                <p class="h2">Редактирование баннеров</p>
            </div>
            <div class="col-sm-2">
                <img style="cursor:pointer" src="../assets/icons/save.svg" alt="">
                <router-link to="/"><img style="margin-left:10%;cursor:pointer" src="../assets/icons/XOutline.svg" alt=""></router-link>
            </div>
        </div>
        <div>
            <div class="row mt-5">
                <div class="col-sm-8">
                    <img :src="banner1" alt="" style="width:50rem;height:auto">
                </div>
                <div class="col-sm-4">
                    <div class="input-group">
                        <input @change="previewFiles" type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        <button v-on:click="()=>sendBanner1('61f253d1a79bd814d4a5e7c9')" class="btn btn-outline-secondary" :class="file==='' ? 'disabled' : ''"  id="inputGroupFileAddon04">Загрузить баннер</button>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm-8">
                    <img :src="banner2" alt="" style="width:50rem;height:auto">
                </div>
                <div class="col-sm-4">
                    <div class="input-group">
                        <input @change="previewFiles" type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        <button v-on:click="()=>sendBanner1('61f2546b99e3162b1ce30aa7')" class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Загрузить баннер</button>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm-8">
                    <img :src="banner3" alt="" style="width:50rem;height:auto">
                </div>
                <div class="col-sm-4">
                    <div class="input-group">
                        <input @change="previewFiles" accept="image/*" type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        <button v-on:click="()=>sendBanner1('61f2547599e3162b1ce30aaa')" class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Загрузить баннер</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            file: '',
            banner1: "",
            banner2: "",
            banner3: ""
        }
    },
    methods:{
        previewFiles(event) {
            
            this.file = event.target.files;
            console.log(this.file);
        },
        sendBanner1(id){
            const formData = new FormData();
            formData.append("image", this.file[0]);
            // const body = JSON.stringify({
            //     image: this.file
            // });
            axios
                .patch(`http://localhost:3000/banner/${id}`,formData,{headers: {"Content-Type": "application/json"  }})
                .then(res=>{
                    console.log(res.data);
                    this.$router.go()
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        getBanner1(id,banner){
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
        if(localStorage.getItem("authed")==0){
            this.$router.push('/')
        }
        this.getBanner1('61f253d1a79bd814d4a5e7c9',1);
        this.getBanner1('61f2546b99e3162b1ce30aa7',2);
        this.getBanner1('61f2547599e3162b1ce30aaa',3);
    }
}
</script>

<style scoped>

</style>