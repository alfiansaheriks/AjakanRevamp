<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Province {
  prov_id: number
  prov_name: string
}

interface City {
  city_id: number
  city_name: string
}

// Reactive state for selected province and city
const selectedProvince = ref<string>('')
const selectedCity = ref<string>('')

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
  if (newProvinceId) {
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
</script>

<template>
  <div class="space-y-4">
    <!-- Province Selector -->
    <UFormGroup label="Provinsi" name="provinsi">
      <USelect 
        v-model="selectedProvince" 
        :options="selectProvince" 
        color="primary" 
        variant="outline" 
        size="xl"
        :ui="{ rounded: 'rounded-xl' }" 
      />
    </UFormGroup>

    <!-- City Selector -->
    <UFormGroup label="Kota" name="kota">
      <USelect 
        v-model="selectedCity" 
        :options="selectCity" 
        color="primary" 
        variant="outline" 
        size="xl"
        :ui="{ rounded: 'rounded-xl' }" 
        :disabled="!selectCity.length" 
      />
    </UFormGroup>
  </div>
</template>

<style scoped>
/* Add any necessary styling */
</style>
