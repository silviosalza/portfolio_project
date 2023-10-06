<script>
export default {
  data() {
    return {
      darkMode: false,
      currentPage: ""
    }
  },
  methods: {
    dark() {
      document.querySelector('body').classList.add('dark-mode')
      this.darkMode = true
      this.$emit('dark')
    },
    light() {
      document.querySelector('body').classList.remove('dark-mode')
      this.darkMode = false
      this.$emit('light')
    },
    modeToggle() {
      if (this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
        this.light()
      } else {
        this.dark()
      }
    },
    pageClicked(event) {
      let selectPageElement = event.currentTarget.querySelector('.pageType');

      if (selectPageElement) {
        this.currentPage = selectPageElement.innerText;
        localStorage.setItem('currentPage', this.currentPage);
        console.log(this.currentPage);
      } else {
        console.error("Element with class 'pageType' not found");
      }
    },
  },
  computed: {
    darkDark() {
      return this.darkMode && 'darkmode-toggled'
    }
  },
  mounted() {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      this.currentPage = storedPage;
    }
  }
}


</script>

<template>
  <div class="bg"></div>
  <div class="app-container">
    <!-- <button @click="modeToggle">Toggle Dark Mode</button> -->
    <div class="d-flex justify-content-end mx-3">
      <div class="mode-toggle" @click="modeToggle" :class="darkDark">
        <div class="toggle">
          <div id="dark-mode" type="checkbox"></div>
        </div>
      </div>
    </div>

    <div class="title">
      <h1>Silvio Filippo Salza</h1>
      <span>Full Stack Junior Web Developer & Not a Proper Designer</span>
    </div>
    <div class="nav">
      <ul class=" p-0">
        <li>
          <router-link @click="pageClicked" style="text-decoration: none; color: inherit;" to="/"><i
              class="fa-solid fa-circle" :class="currentPage === 'Homepage' ? '' : 'd-none'"></i><span
              class="pageType">Homepage</span></router-link>
        </li>
        <li>
          <router-link @click="pageClicked" style="text-decoration: none; color: inherit;" to="/projects"><i
              class="fa-solid fa-circle" :class="currentPage === 'Projects' ? '' : 'd-none'"></i><span
              class="pageType">Projects</span></router-link>
        </li>
        <li>
          <router-link @click="pageClicked" style="text-decoration: none; color: inherit;" to="/info"><i
              class="fa-solid fa-circle" :class="currentPage === 'Info' ? '' : 'd-none'"></i><span
              class="pageType">Info</span></router-link>
        </li>
      </ul>
    </div>
    <div class="router-container">
      <router-view :key="$route.fullPath">
      </router-view>

    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.nav{
  padding: 4rem 0 0.5rem 0;
}
.title {
  h1 {
    font-size: 2rem;
    font-weight: 100;
  }
}

.app-container {
  margin: 3rem;
  padding: 3rem 0 0 3rem;
  overflow: hidden;
  width: calc(100% - 6rem);
  height: calc(100vh - 6rem);
  border: rgb(81, 81, 81) 1px solid;
  background-color: transparent;
}
@media screen and (max-width: 600px) {

  .app-container {
    margin: .5rem;
  padding: .5rem 0 0 .5rem;
  border: 0;
  }
}

li {
  list-style: none;
  padding-bottom: 1rem;
}
.nav li:hover{
    color: rgb(195, 172, 0);
  }

.fa-circle {
  font-size: 0.5rem;
  vertical-align: middle;
  padding-right: 0.5rem;
}
.router-container{
     height: calc(100% - 18rem);
 }
 
</style>

