<script>
export default {
  data() {
    return {
      projects: [
      {
          title: "DELIVEROO FRONT/BACK WEBAPP",
          subtitle: "2023 | Boolean Bootcamp | Final Project Video Presentation",
          link: "https://player.vimeo.com/video/848789609?h=b0db70858d"
        },
        {
          title: "ZALANDO WEBAPP SAMPLE",
          subtitle: "2023 | Boolean Bootcamp | Desktop Only",
          link: "https://zalando-like-webapp.netlify.app/"
        },
        {
          title: "AVADA TECH FORUM SAMPLE",
          subtitle: "2023 | Boolean Bootcamp | Desktop Only",
          link: "https://techforum-sample.netlify.app/"
        },
        {
          title: "WHATSAPP WEBAPP SAMPLE",
          subtitle: "2023 | Boolean Bootcamp | Desktop Only",
          link: "https://wathsup-like-app.netlify.app/"
        },
        {
          title: "SPOTIFY WEBAPP SAMPLE",
          subtitle: "2023 | Boolean Bootcamp | Semi Responsive",
          link: "https://spotifywebapp-sample.netlify.app/"
        },
        {
          title: "DROPBOX WEBAPP SAMPLE",
          subtitle: "2023 | Boolean Bootcamp | Desktop Only",
          link: "https://dropboxwebapp-sample.netlify.app/"
        },
        {
          title: "NETFLIX WEBAPP SAMPLE",
          subtitle: "2023 | Boolean Bootcamp | Desktop Only",
          link: "https://netflixwebapp-sample.netlify.app"
        },

      ],
    }
  },

}

</script>

<template>
  <div class="project-container d-flex justify-content-end scroll-effect">
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <a target="_blank" :href="project.link">
          <h5 class="proj-title">{{ project.title }}</h5>
          <p class="proj-subtitle">{{ project.subtitle }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;

.proj-title{
  font-size: 3rem;
}
@media screen and (max-width: 500px) {
  .proj-title {
    font-size: 2rem;
  }
}


.project-container {
  height: calc(100% - 1.5rem);
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
@media screen and (max-width: 593px) {
  .project-container {
    height: calc(100% - 3.5rem);
  }}
  @media screen and (max-width: 493px) {
  .project-container {
    height: calc(100% - 5rem);
  }}

.project-container::-webkit-scrollbar {
  width: 8px;
  /* Larghezza della barra di scorrimento in WebKit (Chrome, Safari, etc.) */
}
.project-container::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* Colore del cursore della barra di scorrimento */
}
</style>