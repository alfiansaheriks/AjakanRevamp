<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
    domain: z.string().min(3, 'Domain must be selected'),
    paket: z.string().min(3, 'Paket must be selected'),
    namadomain: z.string().min(3, 'Nama domain must be at least 3 characters'),
    domainutama: z.string().min(3, 'Domain utama must be selected'),
    harga: z.string().min(3, 'Harga must be selected'),
    nama_usaha: z.string().min(3, 'Nama usaha must be at least 3 characters'),
    provinsi: z.string(),
    nickname_usaha: z.string().min(3, 'Nickname usaha must be at least 3 characters'),
    kota_usaha: z.string(),
    email: z.string().email('Invalid email address'),
    jenis_usaha: z.string().min(3, 'Jenis usaha must be at least 3 characters'),
    no_wa: z.string().min(3, 'No. WA must be at least 3 characters'),
    usia: z.string().min(3, 'Usia must be at least 3 characters'),
    alamat_usaha: z.string().min(3, 'Alamat usaha must be at least 3 characters'),
    refferal: z.string(),
})

type Schema = z.output<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined,
    namadomain: '',
    domainutama: '',
    domain: '',
    paket: '',
    harga: '',
    nama_usaha: '',
    provinsi: '',
    nickname_usaha: '',
    kota_usaha: '',
    jenis_usaha: '',
    no_wa: '',
    usia: '',
    alamat_usaha: '',
    refferal: '',
})

const referral = [
    { label: 'Instagram', value: 'Instagram' },
    { label: 'Twitter', value: 'Twitter' },
    { label: 'Tiktok', value: 'Tiktok' },
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Linkedin', value: 'Linkedin' },
    { label: 'Google', value: 'Google' },
    { label: 'Whatsapp', value: 'Whatsapp' },
    { label: 'Event/Workshop', value: 'Event/Workshop' }
]

const pilihanDomain = [
    { label: 'Pilih Domain Utama', disabled: true },
    { label: 'ajakan.id', value: 'ajakan.id' },
    { label: 'eventdigital.id', value: 'eventdigital.id' }
]

const pilihanPaket = [
    { label: 'Pilih Paket', disabled: true },
    { label: 'Paket Trial (3 Hari)', value: 'Paket Trial (3 Hari)' },
    { label: 'Paket 1', value: 'Paket 1' },
    { label: 'Paket 2', value: 'Paket 2' },
    { label: 'Paket 3', value: 'Paket 3' }
];

watch(() => state.paket, (newPaket) => {
    switch (newPaket) {
        case 'Paket Trial (3 Hari)':
            state.harga = 'FREE'; // Harga gratis untuk trial
            break;
        case 'Paket 1':
            state.harga = 'Rp 100.000'; // Harga Paket 1
            break;
        case 'Paket 2':
            state.harga = 'Rp 200.000'; // Harga Paket 2
            break;
        case 'Paket 3':
            state.harga = 'Rp 300.000'; // Harga Paket 3
            break;
        default:
            state.harga = ''; // Kosong jika tidak ada paket yang dipilih
    }
})

watch(() => state.domainutama, (newDomainUtama) => {
    switch (newDomainUtama) {
        case 'ajakan.id':
            state.domain = 'ajakan.id'; // Domain utama adalah ajakan.id
            break;
        case 'eventdigital.id':
            state.domain = 'eventdigital.id'; // Domain utama adalah eventdigital.id
            break;
        default:
            state.domain = ''; // Kosong jika tidak ada domain utama yang dipilih
    }
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    console.log(event.data)
}
const props = defineProps<{
    isOpen: boolean
}>()

const emit = defineEmits(['update:isOpen'])

const closeModal = () => {
    emit('update:isOpen', false)
}


</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-30">
            <div
                class="bg-white w-full h-auto lg:w-10/12 lg:h-svh p-6 rounded-lg shadow-sm max-h-screen overflow-y-auto">
                <!-- Header -->
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Request Join Partner Ajakan</h2>
                    <button @click="closeModal" class="text-gray-500 hover:text-gray-800">&times;</button>
                </div>

                <!-- Content -->
                <div class="mt-4">
                    <slot>
                        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                            <div class="border border-[#D6D7D9] rounded-2xl p-4">
                                <h1 class="mb-4">Data Diri</h1>
                                <div class="w-full flex flex-col md:flex-row md:gap-2 lg:flex-row lg:gap-2 justify-center items-center">
                                    <div class="w-full space-y-4">
                                        <UFormGroup label="Paket" name="domain">
                                            <USelect v-model="state.paket" color="primary" variant="outline"
                                                :options="pilihanPaket" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" />
                                        </UFormGroup>

                                        <UFormGroup label="Harga" name="harga">
                                            <UInput v-model="state.harga" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" disabled />
                                        </UFormGroup>
                                    </div>
                                    <div class="w-full space-y-4 mt-4 md:mt-0 lg:mt-0">
                                        <UFormGroup label="Domain Utama" name="domain_utama">
                                            <USelect v-model="state.domainutama" color="primary" variant="outline"
                                                :options="pilihanDomain" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" />
                                        </UFormGroup>

                                        <UFormGroup label="Domain" name="namadomain">
                                            <div class="domain-container">
                                                <UInput v-model="state.namadomain" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" type="text" />
                                                <UInput v-model="state.domain" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" disabled />
                                            </div>
                                        </UFormGroup>
                                    </div>
                                </div>
                            </div>
                            <div class="border border-[#D6D7D9] rounded-2xl p-4">
                                <div class="w-full flex flex-col md:flex-row md:gap-2 lg:flex-row lg:gap-2 justify-center items-center">
                                    <div class="w-full space-y-4">
                                        <UFormGroup label="Nama Usaha" name="nama_usaha">
                                            <UInput v-model="state.nama_usaha" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" placeholder="Usaha Maju Jaya"/>
                                        </UFormGroup>

                                        <UFormGroup label="Nickname Usaha" name="nickname_usaha">
                                            <UInput v-model="state.nickname_usaha" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" placeholder="Ajakan"/>
                                        </UFormGroup>
                                        <UFormGroup label="Email" name="email">
                                            <UInput v-model="state.email" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" type="email" placeholder="admin@ajakan.me" />
                                        </UFormGroup>
                                        <UFormGroup label="No. Whatsapp" name="no_wa">
                                            <UInput v-model="state.no_wa" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" placeholder="081234567890" />
                                        </UFormGroup>
                                        <UFormGroup label="Alamat Usaha" name="alamat_usaha">
                                            <UInput v-model="state.alamat_usaha" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" placeholder="Jl.Perintis Kemerdekaan No. 12, Jakarta Pusat, DKI Jakarta" />
                                        </UFormGroup>
                                    </div>
                                    <div class="w-full space-y-4 mt-4 md:mt-0 lg:mt-0">
                                        <UtilsLocationSelector v-model:provinsi="state.provinsi" v-model:kota_usaha="state.kota_usaha" />
                                        <UFormGroup label="Usaha / Pekerjaan" name="jenis_usaha">
                                            <UInput v-model="state.jenis_usaha" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" type="text" placeholder="Memiliki usaha percetakan" />
                                        </UFormGroup>
                                        <UFormGroup label="Usia" name="usia">
                                            <UInput v-model="state.usia" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" type="text" placeholder="35" />
                                        </UFormGroup>
                                        <UFormGroup label="Dari Mana Kamu Mengetahui Ajakan?" name="referral">
                                            <USelect v-model="state.refferal" color="primary" variant="outline"
                                                :options="referral" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" />
                                        </UFormGroup>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="w-full bg-[#0191D8] text-white px-4 py-2 rounded-xl">Daftar</button>
                        </UForm>
                    </slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.custom-z-50 {
    z-index: 50 !important;
}

.domain-container {
    display: flex;
    width: 100%;
}

.domain-container > *:first-child {
  flex: 6; /* 60% width on mobile */
}

.domain-container > *:last-child {
  flex: 4; /* 40% width on mobile */
}

@media (min-width: 768px) {
  .domain-container > *:first-child {
    flex: 7; /* 70% width on larger screens */
  }

  .domain-container > *:last-child {
    flex: 3; /* 30% width on larger screens */
  }
}

</style>