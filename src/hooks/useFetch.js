import { ref, reactive } from "@vue/reactivity"
export default function useFecth() {

    const countries = ref([])
    const filteredCountries = ref([])
    const isLoading = ref(false)
    const isCountryLoaded = ref(false)

    const filters = reactive({
        region: 'all',
        country: ''
    })


    const getCountries = async () => {
        isLoading.value = true;
        isCountryLoaded.value = true
        const result = await fetch('./mocks/data.json')
        const data = await result.json()
        countries.value = data

        isLoading.value = false;
    }

    const getFiltersCountry = async (filter) => {
        if (!isCountryLoaded.value) {
            await getCountries();
        }

        filteredCountries.value = countries.value.filter(el => {
            return (filter.region === 'all' ? el : filter.region === el.region) &&
                (filter.country === '' ? el : (el.name).toLowerCase().includes(filter.country.toLowerCase()))
        })
    }

    return {
        getFiltersCountry,

        filteredCountries,
        isLoading,
        filters
    }
}