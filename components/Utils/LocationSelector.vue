<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import regions from '~/data/regions.json' // Pastikan path benar

interface Region {
    provinsi: string
    kota: string[]
}

// Reactive state untuk provinsi dan kota yang dipilih
const selectedProvince = ref<string>('')
const selectedCity = ref<string>('')

// Mengkonversi data JSON menjadi opsi untuk selector
const provinceOptions = computed(() =>
    regions.map((region: Region) => ({
        label: region.provinsi,
        value: region.provinsi
    }))
)

const cityOptions = computed(() => {
    const province = regions.find((region: Region) => region.provinsi === selectedProvince.value)
    if (province) {
        return province.kota.map((city) => ({
            label: city,
            value: city
        }))
    }
    return []
})

// Fungsi untuk menangani perubahan provinsi
const onProvinceChange = () => {
    selectedCity.value = '' // Reset kota saat provinsi berubah
}
</script>
<template>
    <div class="space-y-4">
        <!-- Selector Provinsi -->
        <UFormGroup label="Provinsi" name="provinsi">
            <USelect v-model="selectedProvince" :options="provinceOptions" color="primary" variant="outline" size="xl"
                :ui="{ rounded: 'rounded-xl' }" @change="onProvinceChange" />
        </UFormGroup>

        <!-- Selector Kota -->
        <UFormGroup label="Kota" name="kota_usaha">
            <USelect v-model="selectedCity" :options="cityOptions" color="primary" variant="outline" size="xl"
                :ui="{ rounded: 'rounded-xl' }" :disabled="!cityOptions.length" />
        </UFormGroup>
    </div>
</template>


<style scoped>
/* Tambahkan styling jika diperlukan */
</style>