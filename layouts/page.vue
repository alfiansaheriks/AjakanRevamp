<script lang="ts" setup>
const isMenuOpen = useState('isMenuOpen', () => false);
const isDropdownOpen = useState('isDropdownOpen', () => false);

const menus = ref([
    { label: 'Home', to: '/' },
    {
        label: 'Produk', to: '/produk', subMenu: [
            { label: 'Undangan Digital', to: '/undangan-digital' },
            { label: 'Undangan Video', to: '/undangan-video/' },
            { label: 'Undangan Save The Date', to: '/undangan-std' },
            { label: 'Filter Instagram', to: '/filter-instagram' },
            { label: 'Undangan 3D', to: '/undangan-3d' }
        ]
    },
    { label: 'Paket', to: '/join-partner' },
    { label: 'Kontak', to: '/' },
    { label: 'Blog', to: '/blog-list' },
]);


function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}
</script>

<template>
    <div class="text-gray-800 min-h-screen flex flex-col">
        <header
            class="bg-white sticky top-0 w-full z-30 bg-gray-50/75 text-gray-800 dark:bg-gray-950/75 dark:text-gray-100 border-b border-gray-500/50 h-[68px] flex backdrop:backdrop-filter backdrop-blur-lg">
            <PagesContainer class="min-w-full mx-auto flex-1 flex items-center justify-between">
                <NuxtLink to="/" class="font-bold text-lg">
                    <NuxtImg src="/image/LogoAjakan.png" alt="Ajakan Logo" />
                </NuxtLink>

                <!-- Hamburger menu button for mobile -->
                <div class="sm:hidden">
                    <UButton @click="toggleMenu" variant="ghost" color="gray">
                        <Icon name="mdi:menu" class="text-2xl" />
                    </UButton>
                </div>

                <!-- Navigation menu -->
                <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:flex sm:gap-4">
                    <ul class="flex flex-col sm:flex-row gap-4 divide-y sm:divide-y-0 divide-gray-500/50">
                        <li v-for="(menu, i) in menus" :key="i" class="relative">
                            <div class="flex items-center">
                                <NuxtLink :to="menu.to" class="hover:text-primary-500" @click="isMenuOpen = false">
                                    {{ menu.label }}
                                </NuxtLink>
                                <Icon v-if="menu.subMenu" name="mdi:arrow-down-drop-circle" @click="toggleDropdown" class="text-[#0191D8] cursor-pointer text-lg ml-1" />
                            </div>
                            <ul v-if="menu.subMenu && isDropdownOpen" class="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                                <li v-for="(subMenu, j) in menu.subMenu" :key="j" class="py-1 px-3 hover:bg-gray-200">
                                    <NuxtLink :to="subMenu.to" class="block">{{ subMenu.label }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <!-- Buttons for register and login on desktop -->
                <div class="hidden sm:flex items-end pl-4">
                    <UButton label="Register" color="white" variant="ghost" />
                    <UButton label="Login" />
                </div>
            </PagesContainer>
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet">
        </header>

        <main class="flex-1 flex flex-col">
            <slot />
        </main>

        <footer class="bg-[#F8F9FD] border-t border-gray-500/50 py-8">
            <PagesContainer class="flex-1 flex flex-col gap-8">
                <!-- Mobile Layout -->
                <div class="flex flex-col gap-4 md:hidden">
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
                            <NuxtLink to="/" class="text-sm">Undangan</NuxtLink><br />
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
                <div class="hidden flex-col md:grid md:grid-cols-4">
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
                        <NuxtLink to="/" class="text-sm">Undangan Digital</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Ticket Event</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Undangan Video</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Filter Instagram</NuxtLink>
                    </div>
                    <div class="max-w-[350px]">
                        <h1 class="font-bold mb-2">Paket</h1>
                        <NuxtLink to="/" class="text-sm">Undangan Digital</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Ticket Event</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Undangan Video</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Filter Instagram</NuxtLink>
                    </div>
                    <div class="max-w-[350px]">
                        <h1 class="font-bold mb-2">Blog</h1>
                        <NuxtLink to="/" class="text-sm">Tips dan Trik Pernikahan</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Ticket Event</NuxtLink><br />
                    </div>
                </div>
                <div class="md:flex flex-col md:grid md:grid-cols-4">
                    <div class="max-w-[350px] mt-4">
                        <h1 class="font-bold mb-2">Kontak</h1>
                        <Icon name="mdi:instagram" class="bg-[#0191D8] mr-2" size="3vh" />
                        <Icon name="bxl:facebook" class="bg-[#0191D8] mr-2" size="3vh" />
                        <Icon name="mingcute:youtube-line" class="bg-[#0191D8] mr-2" size="3vh" />
                        <Icon name="mage:x" class="bg-[#0191D8] mr-2" size="3vh" />
                        <Icon name="ic:baseline-tiktok" class="bg-[#0191D8] mr-2" size="3vh" />
                        <Icon name="mdi:linkedin" class="bg-[#0191D8] mr-2" size="3vh" />
                        <div class="flex items-center mt-4">
                            <Icon name="ion:call-outline" class="bg-[#545454] mr-2" size="3vh" />
                            <span class="text-sm text-gray-700">+628 522 497 310</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <Icon name="ic:outline-email" class="bg-[#545454] mr-2" size="3vh" />
                            <span class="text-sm text-gray-700">Ajakan@gmail.com</span>
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
                            <NuxtImg src="/logo/visa.png" alt="visa logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/bni.png" alt="bni logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/mandiri.png" alt="mandiri logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/bca.png" alt="bca logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/bri.png" alt="bri logo" class="w-auto object-contain" />
                        </div>
                        <div class="flex gap-5 max-w-[350px]">
                            <NuxtImg src="/logo/permatabank.png" alt="visa logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/dana.png" alt="dana logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/ovo.png" alt="ovo logo" class="w-auto object-contain" />
                        </div>
                        <div class="flex gap-1 max-w-[350px]">
                            <NuxtImg src="/logo/gopay.png" alt="visa logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/linkaja.png" alt="bni logo" class="w-auto object-contain" />
                            <NuxtImg src="/logo/atmbersama.png" alt="mandiri logo" class="w-auto object-contain" />
                        </div>
                    </div>
                    <div class="max-w-[350px] mt-4">
                        <h1 class="font-bold mb-2">Informasi</h1>
                        <NuxtLink to="/" class="text-sm">FAQ</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Terms & Condition</NuxtLink><br />
                        <NuxtLink to="/" class="text-sm">Privacy Policy</NuxtLink><br />
                    </div>

                </div>
            </PagesContainer>
        </footer>

    </div>
</template>