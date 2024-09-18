<template>
    <section class="section-background relative h-[1000px] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0"></div> <!-- Optional overlay for contrast -->
        
        <div class="relative z-10 flex flex-col items-center justify-center text-center h-full text-[#0191D8] px-8" data-aos="fade-up">
            <h1 class="text-3xl mb-4">Hanya dengan <span class="font-semibold text-black">bekerja dari rumah dan tanpa perlu melakukan kustomisasi website,</span> kamu bisa bisnis undangan digital</h1>
            <div class="flex flex-row gap-2">
                <button class="mt-6 w-[160px] bg-[#0191D8] rounded-lg text-white text-xs">Bergabung Sekarang</button>
                <button class="mt-6 w-[160px] bg-transparent border border-[#0191D8] py-2 rounded-lg text-[#0191D8] text-xs">Free Trial</button>
            </div>
        </div>
    </section>
    </template>
    
    <style scoped>
    .section-background {
        background: url('/images/HeroBgMobile.png'); /* Make sure the image is in the public/images directory */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    </style>
    