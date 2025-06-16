<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <RouterLink class="navbar-brand js-scroll-trigger" to="/">
      <span class="d-block d-lg-none">Start Bootstrap</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="/img/profile.jpg" alt="">
      </span>
    </RouterLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/experience">Experience</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/education">Education</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/skills">Skills</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/interests">Interests</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/awards">Awards</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>