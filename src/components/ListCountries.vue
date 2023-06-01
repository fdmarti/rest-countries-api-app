<template>
	<Filters @updateListCountry="updateFilter" />
	<Spinner v-if="isLoading" />
	<section
		class="countries-list"
		:class="theme.theme === 'Dark mode' ? 'light' : 'dark'"
		v-else
	>
		<CardCountry v-for="country in filteredCountries" :country="country" />
	</section>
</template>
<script setup>
	import { inject } from '@vue/runtime-dom';
	import useFecth from '../hooks/useFetch';
	import { CardCountry, Filters, Spinner } from './index';
	const { isLoading, filteredCountries, getFiltersCountry, filters } =
		useFecth();

	getFiltersCountry(filters);

	const theme = inject('theme');

	const updateFilter = (filters) => {
		getFiltersCountry(filters);
	};
</script>
<style scoped>
	.countries-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		align-items: center;
		padding: 20px 0;

		gap: 2rem;
	}

	.dark {
		background-color: var(--veryDarkGrayDarkTheme);
	}

	@media (max-width: 1300px) {
		.countries-list {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 991px) {
		.countries-list {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.countries-list {
			grid-template-columns: 1fr;
		}
	}
</style>
