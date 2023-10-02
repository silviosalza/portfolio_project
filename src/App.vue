<script>


</script>

<template>
<div class="bg"></div>  
<div class="app m-5">
    <div class="title">
      <h1>Silvio Filippo Salza</h1>
      <span>Full Stack Junior Web Developer & Not a Proper Designer</span>
    </div>
    <div class="nav py-5">
      <ul>
        <li>
          <router-link to="/">Homepage</router-link>
        </li>
        <li>
          <router-link to="/projects">Posts</router-link>
        </li>
        <li>
          <router-link to="/info">Info</router-link>
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
</style>
