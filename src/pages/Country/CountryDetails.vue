<template>
	<div
		class="detail-country"
		:class="theme.theme === 'Dark mode' ? 'light' : 'dark'"
	>
		<router-link class="back-btn" to="/"
			><i class="bx bx-arrow-back"></i> Back</router-link
		>

		<div class="country-information">
			<div class="image-flag">
				<img :src="country.flag" :alt="`${country.name} flag`" />
			</div>
			<div class="country-text">
				<h2>{{ country.name }}</h2>
				<div class="information">
					<div>
						<p><strong>Native Name: </strong>{{ country.nativeName }}</p>
						<p><strong>Population: </strong>{{ country.population }}</p>
						<p><strong>Region: </strong>{{ country.region }}</p>
						<p><strong>Sub Region: </strong>{{ country.subregion }}</p>
						<p><strong>Capital: </strong>{{ country.capital }}</p>
					</div>
					<div>
						<p>
							<strong>Top Level domain: </strong>{{ country.topLevelDomain[0] }}
						</p>
						<p><strong>Currencies: </strong>{{ formatCurrency }}</p>
						<p><strong>Lenguages: </strong>{{ formatLanguage }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import './CountryDetails.css';

	import { reactive, computed } from '@vue/reactivity';
	import { inject } from '@vue/runtime-dom';
	import { useRoute } from 'vue-router';
	const route = useRoute();
	const country = reactive(JSON.parse(route.query.country));

	const theme = inject('theme');

	const formatCurrency = computed(() => {
		return country.currencies.map((el) => el.name).join(' - ');
	});

	const formatLanguage = computed(() => {
		return country.languages.map((el) => el.name).join(' - ');
	});
</script>
