<template>
	<div
		class="card"
		:class="theme.theme === 'Dark mode' ? 'light' : 'dark'"
		@click="handleRouter"
	>
		<section class="country-image">
			<img :src="country.flag" :alt="`${country.name} flag`" />
		</section>
		<section class="country-info">
			<h3>{{ country.name }}</h3>
			<p><strong>Population:</strong> {{ formatNumberOfPopulation }}</p>
			<p><strong>Region:</strong> {{ country.region }}</p>
			<p><strong>Capital:</strong> {{ country.capital }}</p>
		</section>
	</div>
</template>
<script setup>
	import { computed, inject } from '@vue/runtime-dom';
	import { useRouter } from 'vue-router';
	const router = useRouter();

	const { country } = defineProps(['country']);

	const theme = inject('theme');

	const formatNumberOfPopulation = computed(() => {
		return String(country.population)
			.split('')
			.map((el, i) => {
				if (i % 3 === 0) return '.' + el;
				else return el;
			})
			.join('')
			.substring(1);
	});

	const handleRouter = () => {
		router.push({
			name: 'country-profile',
			params: { name: country.name },
			query: { country: JSON.stringify(country) },
		});
	};
</script>
<style scoped>
	.card {
		margin: 0 auto;
		width: 290px;
		background-color: var(--white);
		border-radius: 10px;
		box-shadow: 0 0 15px -5px var(--darkGray);
	}

	.card:hover{
		cursor: pointer;
		opacity: 0.7;
	}

	.dark {
		background-color: var(--darkGrayDarkTheme);
		box-shadow: 0 0 15px -5px var(--darkGrayDarkTheme);
	}

	.dark .country-image img {
		box-shadow: 0 0 10px -5px var(--darkGrayDarkTheme);
	}

	.dark p,
	.dark h3 {
		color: var(--white);
	}

	.country-image img {
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		height: 190px;
		min-height: 100%;
		box-shadow: 0 0 15px -5px var(--darkGray);
	}

	.country-info {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 30px;
	}

	h3 {
		font-size: 18px;
	}

	strong,
	p {
		font-size: 14px;
	}
</style>
