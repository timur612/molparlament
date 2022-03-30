<template>
  <div >
    <Carousel class="d-none d-sm-block"/>
    <div class="mt-5 ">
      <News/>
    </div>
    <div class="container mt-5 ">
      <Members/>
    </div>
    <div class="container mt-5 ">
      <Reports/>
    </div>
    <div class="container mt-5">
      <h1>Законотворческая деятельность ???</h1>
    </div>
    <Razdel/>
    <Footer class="mt-5 "/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Home/Carousel.vue'
import News from '../components/Home/News.vue'
import Members from '../components/Home/Members.vue'
import Reports from '../components/Home/Reports.vue'
import Footer from '../components/Home/Footer.vue'
import Razdel from '../components/Home/Razdel.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    News,
    Members,
    Reports,
    Footer,
    Razdel
  }
}
</script>
