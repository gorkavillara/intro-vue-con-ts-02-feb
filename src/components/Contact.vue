<template>
  <div class="contact">
    <p>Contacto</p>
    <router-link :to="{ name: 'Contacto', hash: '#formulario' }">Ir al formulario</router-link>
    <div class="contenido">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        nesciunt blanditiis magnam eaque velit doloremque quam, pariatur
        perspiciatis praesentium vero explicabo minus non alias nemo
        consequuntur! Pariatur, aut minima perferendis animi laborum cumque iste
        vero exercitationem eos dolorum eius temporibus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        nesciunt blanditiis magnam eaque velit doloremque quam, pariatur
        perspiciatis praesentium vero explicabo minus non alias nemo
        consequuntur! Pariatur, aut minima perferendis animi laborum cumque iste
        vero exercitationem eos dolorum eius temporibus!
      </p>
      <img src="https://turismo.euskadi.eus/contenidos/d_destinos_turisticos/0000005101_d2_rec_turismo/es_5101/images/CT_sansebastianhome.jpg" alt="donosti">
    </div>
    <div class="formulario">
        <h3 id="formulario">Formulario de contacto</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        nesciunt blanditiis magnam eaque velit doloremque quam, pariatur
        perspiciatis praesentium vero explicabo minus non alias nemo
        consequuntur! Pariatur, aut minima perferendis animi laborum cumque iste
        vero exercitationem eos dolorum eius temporibus!
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact {
  width: 100%;
  height: 100%;
  background-color: rgb(247, 255, 131);
}
.contenido {
    padding: 2rem 1rem;
    text-align: justify;
}

.contenido img {
    object-fit: contain;
    width: 100%;
    margin: 2rem 0;
}
</style>
