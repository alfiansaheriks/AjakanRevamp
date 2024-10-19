<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { ref, computed, watch, reactive } from 'vue'

interface Province {
    prov_id: number
    prov_name: string
}

interface City {
    city_id: number
    city_name: string
}

// Reactive state for selected province and city
const selectedProvince = ref<Province | undefined>(undefined)
const selectedCity = ref<City | undefined>(undefined)

// Reactive state for provinces and cities
const provincesOption = ref<Province[]>([])
const citiesOption = ref<City[]>([])

// Fetch provinces data using $fetch
const fetchProvinces = async () => {
    try {
        const { data } = await $fetch<{ data: Province[] }>('https://admin-staging-big-product.ajakan.me/api/guest/fetch/province/rajaongkir')
        provincesOption.value = data
    } catch (error) {
        console.error('Error fetching provinces:', error)
    }
}

// Call fetchProvinces when the component is mounted
fetchProvinces()

// Compute province options for the dropdown
const selectProvince = computed(() => {
    return provincesOption.value.map((province) => ({
        label: province.prov_name,
        value: province.prov_id
    }))
})

// Watch for changes in selectedProvince and fetch cities based on the selected province
watch(selectedProvince, async (newProvinceId) => {
    if (newProvinceId !== null) {
        try {
            const { data } = await $fetch<{ data: City[] }>(`https://admin-staging-big-product.ajakan.me/api/guest/fetch/city/rajaongkir/${newProvinceId}`)
            citiesOption.value = data
        } catch (error) {
            console.error('Error fetching cities:', error)
            citiesOption.value = [] // Reset cities if there's an error
        }
    } else {
        citiesOption.value = [] // Reset cities if no province is selected
    }
})

// Compute city options for the dropdown
const selectCity = computed(() => {
    return citiesOption.value.map((city) => ({
        label: city.city_name,
        value: city.city_id
    }))
})

const schema = z.object({
    domain: z.string(),
    type_package: z.string(),
    domainutama: z.string(),
    harga: z.string(),
    fullname: z.string().min(3, 'Nama usaha paling tidak harus 3 karakter'),
    province: z.string(),
    nickname: z.string().min(3, 'Nickname usaha paling tidak harus 3 karakter'),
    city: z.string(),
    email: z.string().email('Invalid email address'),
    current_job: z.string().min(3, 'Jenis usaha must be at least 3 characters'),
    phone: z.string().min(11, 'No. WhatsApp paling tidak harus 11 karakter'),
    age: z.string().min(1, 'age paling tidak harus 1 karakter'),
    address: z.string().min(10, 'Alamat usaha paling tidak harus 10 karakter'),
    source: z.string(),
})

type Schema = z.output<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined,
    namadomain: '',
    domainutama: '',
    domain: '',
    type_package: '',
    harga: '',
    fullname: '',
    province: selectedProvince.value,
    nickname: '',
    city: selectedCity.value,
    current_job: '',
    phone: '',
    age: '',
    address: '',
    source: '',
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
    { label: 'Paket Trial (3 Hari)', value: 'package_trial' },
    { label: 'Paket 1', value: 'package_1' },
    { label: 'Paket 2', value: 'package_2' },
    { label: 'Paket 3', value: 'package_3' }
];

// Computed property to check if the selected package is package_2 or package_3
const isSingleDomainInput = computed(() => {
    return state.type_package === 'package_2' || state.type_package === 'package_3';
});

watch(() => state.type_package, (newPaket) => {
    switch (newPaket) {
        case 'package_trial':
            state.harga = 'FREE'; // Harga gratis untuk trial
            break;
        case 'package_1':
            state.harga = 'IDR 189.000'; // Harga Paket 1
            break;
        case 'package_2':
            state.harga = 'IDR 329.000'; // Harga Paket 2
            break;
        case 'package_3':
            state.harga = 'IDR 629.000'; // Harga Paket 3
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

watch(selectedProvince, (newProvince) => {
    state.province = newProvince
})

watch(selectedCity, (newCity) => {
    state.city = newCity
})

async function onSubmit(event: Event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData.entries());

  // Exclude specific fields
  const fieldsToExclude = ['domain_utama']; // Replace with actual field names
  fieldsToExclude.forEach(field => delete data[field]);

  console.log('Form data:', data);

  try {
    const { data: result, error } = await useFetch('https://admin-staging-big-product.ajakan.me/api/guest/mitra/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (error.value) {
      const errorMessage = error.value.data?.error || error.value.message;
      throw new Error(errorMessage);
    }

    console.log('Success:', result.value);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
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
                                <div
                                    class="w-full flex flex-col md:flex-row md:gap-2 lg:flex-row lg:gap-2 justify-center items-center">
                                    <div class="w-full space-y-4">
                                        <UFormGroup label="Paket" name="type_package">
                                            <USelect v-model="state.type_package" color="primary" variant="outline"
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
                                    <div v-if="!isSingleDomainInput" class="w-full space-y-4 mt-4 md:mt-0 lg:mt-0">
                                        <UFormGroup label="Domain Utama" name="domain_utama">
                                            <USelect v-model="state.domainutama" color="primary" variant="outline"
                                                :options="pilihanDomain" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" />
                                        </UFormGroup>

                                        <!-- Conditionally render domain input fields -->
                                        <UFormGroup label="Domain" name="domain">
                                            <div class="domain-container">
                                                <UInput v-model="state.domain" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" type="text" />
                                                <UInput v-model="state.domainutama" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" disabled />
                                            </div>
                                        </UFormGroup>
                                    </div>
                                    <div v-else class="w-full space-y-4 mt-4 md:mb-24 lg:mb-24">
                                        <UFormGroup label="Domain" name="domain">
                                            <UInput v-model="state.domain" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" type="text" placeholder="contoh: ajakan.com" />
                                            <p class="text-transparent">    </p>
                                        </UFormGroup>
                                    </div>
                                </div>
                            </div>
                            <div class="border border-[#D6D7D9] rounded-2xl p-4">
                                <div
                                    class="w-full flex flex-col md:flex-row md:gap-2 lg:flex-row lg:gap-2 justify-center items-center">
                                    <div class="w-full space-y-4">
                                        <UFormGroup label="Nama Usaha" name="fullname">
                                            <UInput v-model="state.fullname" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" placeholder="Usaha Maju Jaya" />
                                        </UFormGroup>

                                        <UFormGroup label="Nickname Usaha" name="nickname">
                                            <UInput v-model="state.nickname" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" placeholder="Ajakan" />
                                        </UFormGroup>
                                        <UFormGroup label="Email" name="email">
                                            <UInput v-model="state.email" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" type="email" placeholder="admin@ajakan.me" />
                                        </UFormGroup>
                                        <UFormGroup label="No. Whatsapp" name="phone">
                                            <UInput v-model="state.phone" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" placeholder="081234567890" />
                                        </UFormGroup>
                                        <UFormGroup label="Alamat Usaha" name="address">
                                            <UInput v-model="state.address" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }"
                                                placeholder="Jl.Perintis Kemerdekaan No. 12, Jakarta Pusat, DKI Jakarta" />
                                        </UFormGroup>
                                    </div>
                                    <div class="w-full space-y-4 mt-4 md:mt-0 lg:mt-0">
                                        <!-- Province Selector -->
                                        <UFormGroup label="Provinsi" name="province">
                                            <USelect v-model="selectedProvince" :options="selectProvince"
                                                color="primary" variant="outline" size="xl"
                                                :ui="{ rounded: 'rounded-xl' }" />
                                        </UFormGroup>

                                        <!-- City Selector -->
                                        <UFormGroup label="Kota" name="city">
                                            <USelect v-model="selectedCity" :options="selectCity" color="primary"
                                                variant="outline" size="xl" :ui="{ rounded: 'rounded-xl' }"
                                                :disabled="!selectCity.length" />
                                        </UFormGroup>
                                        <UFormGroup label="Usaha / Pekerjaan" name="current_job">
                                            <UInput v-model="state.current_job" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" type="text" placeholder="Memiliki usaha percetakan" />
                                        </UFormGroup>
                                        <UFormGroup label="Usia" name="age">
                                            <UInput v-model="state.age" size="xl" :ui="{
                                                rounded: 'rounded-xl',
                                            }" type="text" placeholder="35" />
                                        </UFormGroup>
                                        <UFormGroup label="Dari Mana Kamu Mengetahui Ajakan?" name="referral">
                                            <USelect v-model="state.source" color="primary" variant="outline"
                                                :options="referral" size="xl" :ui="{
                                                    rounded: 'rounded-xl',
                                                }" />
                                        </UFormGroup>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                class="w-full bg-[#0191D8] text-white px-4 py-2 rounded-xl">Daftar</button>
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

.domain-container>*:first-child {
    flex: 6;
    /* 60% width on mobile */
}

.domain-container>*:last-child {
    flex: 4;
    /* 40% width on mobile */
}

@media (min-width: 768px) {
    .domain-container>*:first-child {
        flex: 7;
        /* 70% width on larger screens */
    }

    .domain-container>*:last-child {
        flex: 3;
        /* 30% width on larger screens */
    }
}
</style>