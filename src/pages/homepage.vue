<script>


</script>

<template>
    <div class="bio_container row d-flex justify-content-sm-end align-items-sm-end">
        <div class="col-md-6 col-lg-3 col-xxl-2">
            <div class="d-flex justify-content-center py-3">
                <img class="bio-img" src="../assets/1690251745175.jpg" alt="">
            </div>
            <p class="px-3">Born in 1989 in Pisa, Italy.
                I am a developer with a significant range of
                job and intercultural experiences, passionate
                about web design, geek culture, technology, and
                teamwork.
            </p>
        </div>

    </div>
</template>

<style scoped lang="scss">
.bio_container {
height: 60%;
overflow-y: scroll;
scrollbar-width: thin;
scrollbar-color: transparent transparent;
}
@media screen and (max-width: 600px) {
.bio_container {
height: 100%;
}
}
.bio-img{
    border-radius: 50%;
    width: 100px;
}
.bio_container::-webkit-scrollbar {
  width: 8px;
  /* Larghezza della barra di scorrimento in WebKit (Chrome, Safari, etc.) */
}
.bio_container::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* Colore del cursore della barra di scorrimento */
}
</style>