<template> 
    <div class="container" >
        <div class="loginform position-absolute top-50 start-50 translate-middle rounded" style="padding:5% 10% 5% 10%">
            <h2 class="text-center">Вход</h2>
            <form>
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">Логин</label>
                    <input type="email" class="form-control inputs" id="exampleInputEmail1"  aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Пароль</label>
                    <input type="password" class="form-control inputs" id="exampleInputPassword1">
                </div>

                <a class="btn text-center" style="background-color:#35415A;color:white;font-size:1.2rem;display:block">Войти</a>
                <a class="text-center" style="color:black;display:block">Не можете войти?</a>
            </form>
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.loginform{
    width:50%;
    background: white;
}
.inputs {
  outline: 0;
  border-width: 0 0 2px;
}

</style>