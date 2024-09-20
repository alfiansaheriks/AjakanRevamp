<template>
  <section class="hero-section z-20" data-aos="fade-in">
    <div class="text-content px-16" data-aos="fade-up">
      <h1 class="leading-tight w-[975px]">
        <span class="text-black md:text-[#0191D8] text-[40px]">Hanya dengan</span> <span class="font-semibold">bekerja dari rumah dan tanpa perlu
        melakukan kustomisasi website,</span>  <span class="text-white md:text-[#0191D8]">kamu bisa bisnis undangan digital</span>
      </h1>
      <div class="flex flex-row gap-2 justify-center py-4 mt-5">
        <button class="bg-[#0191D8] p-3 w-[248px] text-white text-base border border-transparent font-normal hover:bg-transparent hover:border hover:border-[#0191D8] hover:text-[#0191D8] rounded-md">Bergabung Sekarang</button>  
        <button class="bg-transparent p-3 w-[248px] border border-[#0191D8] text-[#0191D8] text-base font-normal hover:bg-[#0191D8] hover:text-white rounded-md">Free Trial</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: url('/images/HeroSection.png') center center / cover no-repeat;
  width: 100%;
  height: 1400px;
  color: white;
}

.text-content {
  max-width: 1300px;
  background: transparent;
  margin-top: 220px;
  text-align: center;
}

.text-content h1 {
  font-size: 2rem;
  color: #000;
}

.buttons {
  margin-top: 20px;
  margin-right: 20px;
}

.primary-button,
.secondary-button {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}

.primary-button {
  background-color: #1a73e8;
  color: white;
}

.secondary-button {
  background-color: transparent;
  color: #1a73e8;
  border: 2px solid #1a73e8;
}

@media (max-width: 768px) {
  .hero-section {
    background: #0191D8;
  }

  .text-content {
    background: none;
  }

  .highlight-text {
    color: white;
  }

  .black-text {
    color: black;
  }

  .buttons {
    flex-wrap: nowrap;
  }

  .primary-button {
    text-align: center;
    background-color: #434343;
    width: 100px; /* Adjust the width as needed */
  }
  .secondary-button {
    background-color: transparent;
    color: #434343;
    border-color: #434343;
    width: 100px; /* Adjust the width as needed */
  }
}
</style>
