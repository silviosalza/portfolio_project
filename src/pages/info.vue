<script>
export default {
  data() {
    return {
      pdfPath: "src/assets/CVSilvioSalza.pdf",
      pdfPathEng: "src/assets/CV-ENG-SilvioSalza.pdf"
    };
  }
};
</script>

<template>
  <div class="info d-flex justify-content-md-center align-items-end">
    <ul class="p-0">
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/silvio-filippo-salza-608079281/">Linkedin</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/silviosalza">GitHub</a>
      </li>
      <li>
        <a href="mailto:silviofilipposalza@gmail.com">Email</a>
      </li>
      <li>
        Download CV<a :href="pdfPathEng" download="CV-ENG-SilvioSalza.pdf"> ENG </a>&#9679;<a :href="pdfPath" download="CVSilvioSalza.pdf"> ITA</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>