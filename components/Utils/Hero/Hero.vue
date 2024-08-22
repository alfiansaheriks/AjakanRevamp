<template>
  <section class="hero-section">
    <div class="text-content">
      <h1>
        <span class="text-black md:text-[#0191D8]">Hanya dengan</span> <strong>bekerja dari rumah dan tanpa perlu
        melakukan kustomisasi website,</strong>  <span class="text-white md:text-[#0191D8]">kamu bisa bisnis undangan digital</span>
      </h1>
      <div class="buttons">
        <UButton label="Bergabung Sekarang" class="primary-button"/>
        <UButton label="Free Trial" class="secondary-button" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  background: url('assets/img/image/HeroBgTry.png') center center / cover no-repeat;
  width: 100%;
  height: 100vh;
  color: white;
}

.text-content {
  max-width: 800px;
  background: transparent;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
}

.text-content h1 {
  font-size: 2rem;
  color: #000;
}

.buttons {
  margin-top: 20px;
}

.primary-button,
.secondary-button {
  padding: 10px 20px;
  margin: 5px;
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
