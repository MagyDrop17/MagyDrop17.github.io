<script setup lang="ts">

  import LinkAbout from '@/components/LinkAbout.vue';
  import { RouterLink } from 'vue-router';

</script>


<template>

  <div class="flex flex-col justify-center mt-5">
    <div class="m-auto max-w-2xl flex flex-col justify-center">
      <h1 class="text-4xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-5xl">Hello.</h1> 
      <h2 class="text-lg font-extrabold leading-none tracking-tight md:text-2xl lg:text-xl">My name is Daniel Valencia, but normally they call me Dani.</h2>
    
      <div class="mt-5">
        
        <p>I am a computer engineering and Business Administration and Management student at the 
          <LinkAbout href="https://www.uoc.edu/portal/es/index.html" alt="UOC">
            <span class="relative">Open University of Catalonia</span>
          </LinkAbout> and also a Junior DevOps Engineer currently based in Barcelona, Spain. 
        </p>

        <p class="mt-4">
          In 2017, I began my journey in the technology world by enrolling in a mid-level training course on Microinformatics Networking Systems at 
          <LinkAbout href="https://www.inslapineda.com/" alt="La Pineda">
            <span class="relative">La Pineda Institute</span>
          </LinkAbout>. Driven by my hunger for learning, I also pursued two advanced-level courses in systems administration and web development at the same Institute.
        </p>

        <p class="mt-4">
          Nonetheless, at the same time I have worked in several companies as a SysAdmin and/or Web Developer. Some examples are 
          <LinkAbout href="https://webhelp.com/" alt="Webhelp">
            <span class="relative">Webhelp</span>
          </LinkAbout> under  
          <LinkAbout href="https://workspace.google.com/" alt="Google Workspace">
            <span class="relative">Google Workspace</span> 
          </LinkAbout>, 
          <LinkAbout href="https://itnig.net/" alt="Itnig">
            <span class="relative">Itnig</span>
          </LinkAbout>, 
          <LinkAbout href="https://factorialhr.es/" alt="Factorial">
            <span class="relative">Factorial</span>
          </LinkAbout>, FTL, and others.
          At the moment I am currently working as a FrontEnd Engineer in the 
          <LinkAbout href="https://interior.gencat.cat/en/inici/index.html" alt="Department of Internal Affairs">
            <span class="relative">Department of Internal Affairs</span>
          </LinkAbout> in the 
          <LinkAbout href="https://govern.cat/gov/" alt="Government of Catalonia">
            <span class="relative">Government of Catalonia</span>
          </LinkAbout>.
        </p>

        <p class="mt-4">
          Also I have created a few projects that are in production, you can check them out in 
          <LinkAbout href="https://nebula.cat" alt="Nebula">
            <span class="relative">nebula.cat</span>
          </LinkAbout> and 
          <LinkAbout href="https://cableando.net" alt="Cableando">
            <span class="relative">cableando.net</span>
          </LinkAbout>. You can find how I built them in the  
          <RouterLink to="/portfolio" class="cursor-pointer relative before:absolute before:bg-indigo-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.25] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 inline-block">
            <span class="relative">portfolio</span></RouterLink> page.
        </p>

      </div>

    </div>
  </div>

</template>
