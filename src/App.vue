<script>
export default {
  data(){
    return{
      darkMode: false
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
            if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
                this.light()
            } else {
                this.dark()
            }
        },
    },
    computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
    }
}


</script>

<template>
<div class="bg"></div>  
<div class="app m-5">
  <button @click="modeToggle">Toggle Dark Mode</button>
    <div class="title">
      <h1>Silvio Filippo Salza</h1>
      <span>Full Stack Junior Web Developer & Not a Proper Designer</span>
    </div>
    <div class="nav py-5">
      <ul>
        <li>
          <router-link style="text-decoration: none; color: inherit;" to="/">Homepage</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" to="/info">Info</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;


.title{
  h1{
    font-size: 2rem;
    font-weight: 100;
  }
  span{
    font-weight: 500;
  }
}
.app {
  padding: 3rem 0 0 3rem;
  width: calc(100% - 6rem);
  height: calc(100vh - 6rem);
  overflow: hidden;
  border: rgb(81, 81, 81) 1px solid;
  background-color: transparent
}
  li{
    list-style: none;
    padding-bottom: 1rem;
    &:hover{
      color: rgb(195, 172, 0);
    }
}
</style>
