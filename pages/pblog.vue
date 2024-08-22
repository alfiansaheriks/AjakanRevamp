<script lang="ts" setup>
definePageMeta({
    title: 'Blog',
    description: 'Ini adalah halaman blog',
    layout: 'page',
});

const props = defineProps<{ slug: string }>();

console.log(props);

const {data: detailblog, error: errorDetailBlog} = useFetch(() => `https://ajakan.me//api/guest/blog/detail/${props.slug}`);

</script>
<template>
    <section id="section1" class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative lg:px-20 lg:py-4">
        <div class="flex-1 flex flex-col justify-start px-4 py-4 lg:px-20 lg:py-20">
            <h1 class="text-4xl font-semibold">Itu terjadi pada Ajakan: pengumpulan Februari</h1>
            <p class="text-sm text-[#545454]">24/01/02</p>
            <div class="flex flex-row justify-start items-start gap-2 mt-4">
                <NuxtImg src="/image/blogimage.png" alt="Article Image" class="object-cover rounded-xl" />
            </div>
            <div class="mt-20 max-w-[1000px]">
                <p class="text-sm text-[#545454]">Hii Kamuu! Yang akan mudik dari atau ke Jateng, Gojek siap antar ke
                    rumah dan kemana pun.
                    Gojek bekerjasama dengan Pemerintah Provinsi Jawa Tengah untuk mendukung program Mudik Gratis. Untuk
                    kamu penumpang Mudik Gratis Jawa Tengah moda angkutan bus akan mendapatkan voucher khusus dari Gojek
                    untuk layanan GoRide, GoCar, GoFood.</p>
                <div class="py-2">
                    <p class="text-sm font-bold text-[#545454] mt-4">Detail Kode Promo:</p>
                    <p class="text-sm font-bold text-[#545454]">1. LEBIH HEMAT</p>
                    <p class="text-sm text-[#545454] px-3.5">Diskon total 54 ribu untuk layanan GoRide, GoCar, GoFood,
                        dapat
                        dipakai di kota Tasikmalaya, Purwakarta, Garut, Cirebon, Karawang, Sukabumi, Cilacap, Magelang,
                        Pekalongan, Tegal dan Purwokerto.</p>
                    <p class="text-sm font-bold text-[#545454]">2. GOJEK HEMAT</p>
                    <p class="text-sm text-[#545454] px-3.5">Diskon total 123 ribu untuk layanan GoRide, GoCar, GoFood,
                        dapat dipakai di kota Semarang Raya, Solo Raya, Daerah Istimewa Yogyakarta.</p>
                    <p class="text-sm font-bold text-[#545454]">3. COBAIN GOJEK</p>
                    <p class="text-sm text-[#545454] px-3.5">Diskon total 100 ribu untuk layanan GoRide, GoCar, GoFood.
                        Khusus untuk pengguna baru dan pengguna yang sudah 30 hari tidak pakai layanan Gojek. Dapat di
                        pakai di seluruh kota.</p>
                    <p class="text-sm font-normal text-[#545454] mt-4">Tambahan kode lainnya yang bisa kamu pakai kemana
                        saja, ambil promonya setiap minggu!</p>
                </div>
                <div class="py-2">
                    <ul class="list-disc list-inside"> <b>GOCAR AJA:</b>
                        <div class="px-2">
                            <li class="text-sm text-[#545454]">1x voucher diskon Rp10.000 untuk layanan GoCar berlaku
                                untuk semua metode pembayaran</li>
                            <li class="text-sm text-[#545454]">4x voucher diskon Rp5.000 untuk layanan GoCar berlaku
                                untuk semua metode pembayaran</li>
                        </div>
                    </ul>
                </div>
                <div class="py-2">
                    <ul class="list-disc list-inside"> <b>GORIDE AJA:</b>
                        <div class="px-2">
                            <li class="text-sm text-[#545454]">1x voucher diskon Rp10.000 untuk layanan GoRide berlaku
                                untuk semua metode pembayaran</li>
                            <li class="text-sm text-[#545454]">2x voucher diskon Rp5.000 untuk layanan GoRide berlaku
                                untuk semua metode pembayaran</li>
                            <li class="text-sm text-[#545454]">4x voucher diskon Rp2.500 untuk layanan GoRide berlaku
                                untuk semua metode pembayaran</li>
                        </div>
                    </ul>
                </div>
                <p class="text-sm py-2">Selamat mudik dan hati-hati dijalan.</p>
            </div>
            <div class="flex-1 flex flex-row gap-2 mt-10">
                <Icon name="iconamoon:comment-fill" size="2rem" class="text-[#0191D8]" />
                <Icon name="icon-park-outline:like" size="2rem" class="text-[#0191D8]" />
                <Icon name="majesticons:share-line" size="2rem" class="text-[#0191D8]" />
            </div>
            <div>
                <p class="font-semibold py-4">Komentar</p>
                <div class="flex-1 flex flex-row gap-2">
                    <NuxtImg src="https://picsum.photos/seed/picsum/200/300" alt="Profile Image"
                        class="object-cover rounded-full w-12 h-12" />
                    <input type="text"
                        class="w-full h-12 pl-4 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Tulis Komentar" />
                </div>
            </div>
        </div>
        <div class="flex-1 flex flex-col px-4 lg:px-20">
            <div class="flex-1 flex flex-col lg:flex-row gap-8">
                <div>
                    <p class="font-semibold">Masuk Dengan</p>
                    <div class="flex flex-row gap-2 py-2">
                        <Icon name="logos:disqus" size="2rem" class="text-[#0191D8]" />
                        <Icon name="mdi:facebook" size="2rem" class="text-[#0191D8]" />
                        <Icon name="hugeicons:new-twitter-ellipse" size="2rem" class="text-[#0191D8]" />
                        <Icon name="ant-design:google-circle-filled" size="2rem" class="text-[#E63242]" />
                    </div>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <p class="font-semibold">Daftar dengan Disqus</p>
                    <input type="text"
                        class="w-full p-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Nama" />
                    <input type="email"
                        class="w-full p-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Email" />
                    <input type="password"
                        class="w-full p-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Password" />
                    <p class="text-sm text-[#989898]">Please access our <a class="underline"
                            href="https://disqus.com/privacy-policy/">Privacy Policy </a>to learn what personal data
                        Disqus collects and your choices
                        about how it is used. All users of our service are also subject to our <a class="underline"
                            href="https://help.disqus.com/customer/portal/articles/466260-terms-of-service">Terms of
                            Service.</a> </p>
                </div>
            </div>
            <div class="flex justify-end items-end py-4">
                <UButton class="bg-[#0191D8] text-white font-normal rounded-xl focus:outline-none px-8 py-2"
                    label="Daftar" />
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-row gap-2">
                    <NuxtImg src="https://picsum.photos/id/64/200/300" alt="Profile Image"
                        class="object-cover rounded-full w-12 h-12" />
                    <div class="flex flex-col w-full">
                        <p class="font-semibold">Tsana</p>
                        <p class="text-sm text-[#545454]">Informasinya bagus banget.</p>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <NuxtImg src="https://picsum.photos/id/22/200/300" alt="Profile Image"
                        class="object-cover rounded-full w-12 h-12" />
                    <div class="flex flex-col w-full">
                        <p class="font-semibold">Tomas</p>
                        <p class="text-sm text-[#545454]">Informasinya bagus banget.</p>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <p class="font-semibold text-xl">Lebih Banyak dari Ajakan</p>
                <div class="py-4">
                </div>
            </div>
            <div class="py-4">
                <p class="font-semibold text-xl">Direkomendasikan dari Ajakan</p>
                <div class="py-4">
                </div>
            </div>
        </div>
    </section>
</template>