<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const isDropdownOpen = ref<number | null>(null);
const scrolled = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDropdown = (index: number) => {
  isDropdownOpen.value = isDropdownOpen.value === index ? null : index;
};

const handleLinkClick = () => {
  isMenuOpen.value = false;
  isDropdownOpen.value = null;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isMobile = ref(false);
const isTablet = ref(false);
const isDesktop = ref(false);

const updateDeviceType = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768;
    isTablet.value = window.innerWidth > 768 && window.innerWidth < 1024;
    isDesktop.value = window.innerWidth >= 1024;
  }
};

onMounted(() => {
  updateDeviceType();
  window.addEventListener('resize', updateDeviceType);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDeviceType);
});

const menus = ref([
  { label: 'Home', to: '/' },
  {
    label: 'Produk', to: '/produk', subMenu: [
      { label: 'Undangan Digital', to: '/undangan-digital' },
      { label: 'Undangan Video', to: '/undangan-video' },
      { label: 'Undangan Save The Date', to: '/undangan-std' },
      { label: 'Filter Instagram', to: '/filter-instagram' },
      { label: 'Undangan 3D', to: '/undangan-3d' }
    ]
  },
  { label: 'Paket', to: '/join-partner' },
  { label: 'Blog', to: '/blog-list' },
]);



</script>

<template>
  <div class="text-gray-800 min-h-screen flex flex-col">
    <div>
      <header v-if="scrolled && !isMobile"
        class="z-30 fixed top-0 w-full bg-white shadow-lg h-16 flex items-center justify-between transition-colors duration-300">
        <NuxtLink to="/" class="font-bold text-lg">
          <img v-if="!isMobile" src="/images/LogoAjakan.png" alt="Ajakan Logo"
            class="scale-75 absolute top-0 left-[8%]" />
        </NuxtLink>
        <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:flex sm:gap-4 flex">
          <ul class="flex flex-col sm:flex-row gap-4 divide-y sm:divide-y-0 divide-gray-500/50">
            <li v-for="(menu, i) in menus" :key="i" class="relative">
              <div class="flex items-center">
                <NuxtLink :to="menu.to" :class="{ 'font-bold': route.path === menu.to }" class="hover:text-primary-500"
                  @click="isMenuOpen = false">
                  {{ menu.label }}
                </NuxtLink>
                <Icon v-if="menu.subMenu" name="mdi:arrow-down-drop-circle" @click="toggleDropdown(i)"
                  class="text-[#0191D8] cursor-pointer text-lg ml-1" />
              </div>
              <ul v-if="menu.subMenu && isDropdownOpen && isDesktop && !isTablet && !isMobile"
                class="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                <li v-for="(subMenu, j) in menu.subMenu" :key="j"
                  class="py-1 px-3 min-w-[200px] hover:bg-gray-200 rounded-lg">
                  <NuxtLink :to="subMenu.to" :class="{ 'font-bold': route.path === subMenu.to }" class="block"
                    @click="handleLinkClick">
                    {{ subMenu.label }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div>
          <p class="text-transparent">&#8709;</p>
        </div>
      </header>
      <header v-else
        class="z-30 fixed top-0 w-full bg-transparent h-24 flex items-center justify-between transition-colors duration-300">
        <NuxtLink to="/" class="font-bold text-lg">
          <img v-if="!isMobile" src="/images/LogoAjakan.png" alt="Ajakan Logo"
            class="scale-75 absolute top-0 left-[8%]" />
        </NuxtLink>
        <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:flex sm:gap-4">
          <ul class="flex flex-col sm:flex-row gap-4 divide-y sm:divide-y-0 divide-gray-500/50">
            <li v-for="(menu, i) in menus" :key="i" class="relative">
              <div class="flex items-center">
                <NuxtLink :to="menu.to" :class="{ 'font-bold': route.path === menu.to }" class="hover:text-primary-500"
                  @click="isMenuOpen = false">
                  {{ menu.label }}
                </NuxtLink>
                <Icon v-if="menu.subMenu" name="mdi:arrow-down-drop-circle" @click="toggleDropdown(i)"
                  class="text-[#0191D8] cursor-pointer text-lg ml-1" />
              </div>
              <ul v-if="menu.subMenu && isDropdownOpen && isDesktop && !isTablet && !isMobile"
                class="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                <li v-for="(subMenu, j) in menu.subMenu" :key="j"
                  class="py-1 px-3 min-w-[200px] hover:bg-gray-200 rounded-lg">
                  <NuxtLink :to="subMenu.to" :class="{ 'font-bold': route.path === subMenu.to }" class="block"
                    @click="handleLinkClick">
                    {{ subMenu.label }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div>
          <p class="text-transparent">&#8709;</p>
        </div>
      </header>
      <!-- Desktop Header -->
      <header v-if="scrolled && isDesktop"
        class="z-30 fixed top-0 w-full bg-white shadow-lg h-16 flex items-center justify-between transition-colors duration-300">
        <NuxtLink to="/" class="font-bold text-lg">
          <img src="/images/LogoAjakan.png" alt="Ajakan Logo" class="scale-75 absolute top-0 left-[8%]" />
        </NuxtLink>
        <nav class="flex gap-4">
          <ul class="flex flex-row gap-4 divide-y-0">
            <li v-for="(menu, i) in menus" :key="i" class="relative">
              <div class="flex items-center">
                <NuxtLink :to="menu.to" :class="{ 'font-bold': route.path === menu.to }" class="hover:text-primary-500">
                  {{ menu.label }}
                </NuxtLink>
                <Icon v-if="menu.subMenu" name="mdi:arrow-down-drop-circle" @click="toggleDropdown(i)"
                  class="text-[#0191D8] cursor-pointer text-lg ml-1" />
              </div>
              <ul v-if="menu.subMenu && isDropdownOpen === i"
                class="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                <li v-for="(subMenu, j) in menu.subMenu" :key="j"
                  class="py-1 px-3 min-w-[200px] hover:bg-gray-200 rounded-lg">
                  <NuxtLink :to="subMenu.to" :class="{ 'font-bold': route.path === subMenu.to }" class="block"
                    @click="handleLinkClick">
                    {{ subMenu.label }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div>
          <p class="text-transparent">&#8709;</p>
        </div>
      </header>

      <!-- Mobile/Tablet Header -->
      <header v-if="isMobile || isTablet"
        class="z-30 fixed top-0 w-full bg-white h-16 flex items-center justify-between px-4">
        <NuxtLink to="/" class="font-bold text-lg">
          <img src="/images/LogoAjakan.png" alt="Ajakan Logo" class="scale-75" />
        </NuxtLink>
        <button @click="toggleMenu" class="text-xl">
          <Icon :name="isMenuOpen ? 'mdi:close' : 'ion:menu'" />
        </button>
        <!-- Navigation menu -->
        <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
          class="absolute left-0 px-4 py-4 top-[64px] w-full bg-white transition-transform duration-300 ease-in-out">
          <ul class="flex flex-col gap-6 divide-gray-500/50">
            <li v-for="(menu, i) in menus" :key="i" class="relative">
              <div class="flex items-center">
                <NuxtLink :to="menu.to" :class="{ 'font-bold': route.path === menu.to }" class="hover:text-primary-500"
                  @click="handleLinkClick">
                  {{ menu.label }}
                </NuxtLink>
                <Icon v-if="menu.subMenu" name="mdi:arrow-down-drop-circle" @click="toggleDropdown(i)"
                  class="text-[#0191D8] cursor-pointer text-lg ml-1" />
              </div>
              <ul v-if="menu.subMenu && isDropdownOpen === i"
                class="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                <li v-for="(subMenu, j) in menu.subMenu" :key="j" class="py-1 px-3 hover:bg-gray-200 rounded-md">
                  <NuxtLink :to="subMenu.to" :class="{ 'font-bold': route.path === subMenu.to }" class="block"
                    @click="handleLinkClick">
                    {{ subMenu.label }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>

    <main class="font-sans flex-1 flex flex-col z-10">
      <slot />
      <div class="fixed bottom-5 right-5 z-30">
        <a href="https://ajakan.me/link" target="_blank">
          <Icon name="logos:whatsapp-icon"
            class="bg-[#25D366] text-white rounded-full transition-transform transform hover:scale-110 hover:shadow-lg"
            size="10vh" />
        </a>
      </div>
    </main>

    <footer class="py-8 z-10 bg-white">
      <PagesContainer class="flex-1 flex flex-col gap-8">
        <!-- Mobile Layout -->
        <div class="flex flex-col gap-4 md:hidden">
          <img src="/images/LogoAjakan.png" alt="Ajakan Logo" class="w-16 h-16" />
          <div class="max-w-[350px]">
            <h1 class="font-bold mb-2">Tentang Kami</h1>
            <p class="text-sm">
              Ajakan merupakan platform B2B yang menyediakan berbagai macam produk undangan digital
              seperti undangan website, undangan video, filter instagram, dan undangan save the date.
              Produk kami sudah terintegrasi dan sangat mudah digunakan, serta dengan dukungan layanan
              24/7.
            </p>
          </div>
          <div class="flex gap-4">
            <div class="max-w-[160px]">
              <h1 class="font-bold mb-2">Produk</h1>
              <NuxtLink to="/undangan-digital" class="text-sm">Undangan</NuxtLink><br />
              <NuxtLink to="/" class="text-sm">Undangan</NuxtLink><br />
            </div>
            <div class="max-w-[160px]">
              <h1 class="font-bold mb-2">Paket</h1>
              <NuxtLink to="/" class="text-sm">Undangan</NuxtLink><br />
              <NuxtLink to="/" class="text-sm">Undangan</NuxtLink><br />
            </div>
          </div>
          <div class="max-w-[350px]">
            <h1 class="font-bold mb-2">Blog</h1>
            <NuxtLink to="/" class="text-sm">Tips dan Trik Pernikahan</NuxtLink><br />
            <NuxtLink to="/" class="text-sm">Ticket Event</NuxtLink><br />
          </div>
        </div>

        <!-- Desktop Layout -->
        <div class="hidden flex-col md:grid md:grid-cols-4 lg:gap-10">
          <div class="max-w-[350px]">
            <h1 class="font-bold mb-2">Tentang Kami</h1>
            <p class="text-sm">
              Ajakan merupakan platform B2B yang menyediakan berbagai macam produk undangan digital
              seperti undangan website, undangan video, filter instagram, dan undangan save the date.
              Produk kami sudah terintegrasi dan sangat mudah digunakan, serta dengan dukungan layanan
              24/7.
            </p>
          </div>
          <div class="max-w-[350px]">
            <h1 class="font-bold mb-2">Produk</h1>
            <NuxtLink to="/undangan-digital" class="text-sm">Undangan Digital</NuxtLink><br />
            <NuxtLink to="/undangan-std" class="text-sm">Ticket Event</NuxtLink><br />
            <NuxtLink to="/undangan-video" class="text-sm">Undangan Video</NuxtLink><br />
            <NuxtLink to="/filter-instagram" class="text-sm">Filter Instagram</NuxtLink>
          </div>
          <div class="max-w-[350px]">
            <h1 class="font-bold mb-2">Paket</h1>
            <NuxtLink to="/undangan-digital" class="text-sm">Undangan Digital</NuxtLink><br />
            <NuxtLink to="/undangan-std" class="text-sm">Ticket Event</NuxtLink><br />
            <NuxtLink to="/undangan-video" class="text-sm">Undangan Video</NuxtLink><br />
            <NuxtLink to="/filter-instagram" class="text-sm">Filter Instagram</NuxtLink>
          </div>
          <div class="max-w-[350px]">
            <h1 class="font-bold mb-2">Blog</h1>
            <NuxtLink to="/" class="text-sm">Tips dan Trik Pernikahan</NuxtLink><br />
            <NuxtLink to="/" class="text-sm">Ticket Event</NuxtLink><br />
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-4 lg:gap-10">
          <div class="max-w-[350px] mt-4">
            <h1 class="font-bold mb-2">Kontak</h1>
            <NuxtLink to="https://www.instagram.com/ajakan.me/" target="_blank">
              <Icon name="mdi:instagram" class="bg-[#0191D8] mr-2" size="3vh" />
            </NuxtLink>
            <NuxtLink to="https://www.facebook.com/ajakan.me/" target="_blank">
              <Icon name="bxl:facebook" class="bg-[#0191D8] mr-2" size="3vh" />
            </NuxtLink>
            <NuxtLink to="https://www.youtube.com/channel/UCNAWu06W9Wg3xYe9eqpX0ug" target="_blank">
              <Icon name="mingcute:youtube-line" class="bg-[#0191D8] mr-2" size="3vh" />
            </NuxtLink>
            <NuxtLink to="https://x.com/AjakanMe" target="_blank">
              <Icon name="mage:x" class="bg-[#0191D8] mr-2" size="3vh" />
            </NuxtLink>
            <NuxtLink to="https://www.tiktok.com/@ajakan.me" target="_blank">
              <Icon name="ic:baseline-tiktok" class="bg-[#0191D8] mr-2" size="3vh" />
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/company/ajakan" target="_blank">
            <Icon name="mdi:linkedin" class="bg-[#0191D8] mr-2" size="3vh" />
            </NuxtLink>
            <div class="flex items-center mt-4">
              <Icon name="ion:call-outline" class="bg-[#545454] mr-2" size="3vh" />
              <span class="text-sm text-gray-700">+628 522 497 310</span>
            </div>
            <div class="flex items-center mt-4">
              <Icon name="ic:outline-email" class="bg-[#545454] mr-2" size="3vh" />
              <span class="text-sm text-gray-700">admin@ajakan.me</span>
            </div>
            <div class="flex items-center mt-4">
              <Icon name="bx:map" class="bg-[#545454] mr-2" size="5vh" />
              <span class="text-sm text-gray-700">Centennial Tower Lt. 29 Unit D-F, Jl Jend. Gatot
                Subroto, Jakarta Selatan, DKI Jakarta</span>
            </div>
          </div>
          <div class="max-w-[350px] mt-4">
            <h1 class="font-bold mb-2">Pembayaran</h1>
            <div class="flex gap-1 max-w-[350px]">
              <img src="/logos/visa.png" alt="visa logo" class="w-[50px] object-contain" />
              <img src="/logos/bni.png" alt="bni logo" class="w-[50px] object-contain" />
              <img src="/logos/mandiri.png" alt="mandiri logo" class="w-[50px] object-contain" />
              <img src="/logos/bca.png" alt="bca logo" class="w-[50px] object-contain" />
            </div>
            <div class="flex gap-1 max-w-[350px]">
              <img src="/logos/bri.png" alt="bri logo" class="w-[50px] object-contain" />
              <img src="/logos/permatabank.png" alt="visa logo" class="w-[50px] object-contain" />
              <img src="/logos/dana.png" alt="dana logo" class="w-[50px] object-contain" />
            </div>
            <div class="flex gap-1 max-w-[350px]">
              <img src="/logos/ovo.png" alt="ovo logo" class="w-[50px] object-contain" />
              <img src="/logos/gopay.png" alt="visa logo" class="w-[50px] object-contain" />
              <img src="/logos/linkaja.png" alt="bni logo" class="w-[25px] object-contain" />
              <img src="/logos/atmbersama.png" alt="mandiri logo" class="w-[50px] object-contain" />
            </div>
          </div>
          <div class="max-w-[350px] mt-4">
            <h1 class="font-bold mb-2">Informasi</h1>
            <NuxtLink to="https://ajakan.me/#faq" target="_blank" class="text-sm">FAQ</NuxtLink><br />
            <NuxtLink to="https://ajakan.me/term-condition" target="_blank" class="text-sm">Terms & Condition</NuxtLink>
            <br />
            <NuxtLink to="https://ajakan.me/privacy-policy" target="_blank" class="text-sm">Privacy Policy</NuxtLink>
            <br />
          </div>
        </div>
      </PagesContainer>
    </footer>

  </div>
</template>

<style scoped>
header.h-auto {
  height: auto;
}

@media (max-width: 640px) {
  nav {
    position: absolute;
  }
}
</style>