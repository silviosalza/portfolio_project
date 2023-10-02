<script>


</script>

<template>
  <div class="app">
    
    <router-view></router-view>
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
</template>

<style lang="scss">
@use "./styles/general.scss" as *;


.app {
  width: calc(100% - 6rem);
  height: calc(100vh - 6rem);
  overflow: hidden;
  border: black 2px solid;
  margin: 3rem 3rem;

}
</style>
