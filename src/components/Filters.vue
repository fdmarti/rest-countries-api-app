<template>
	<div class="filter" :class="theme.theme === 'Dark mode' ? 'light' : 'dark'">
		<section class="input">
			<i class="bx bx-search-alt-2 bx-sm"></i>
			<input
				type="text"
				placeholder="Search for a country..."
				class="shadow-input"
				v-model="filters.country"
			/>
		</section>
		<section class="select">
			<select
				name="region"
				id="region"
				class="shadow-input"
				v-model="filters.region"
			>
				<option disabled selected>Filter by Region</option>
				<option value="all">All</option>
				<option value="Africa">Africa</option>
				<option value="Americas">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</section>
	</div>
</template>
<script setup>
	import { watch, inject } from '@vue/runtime-dom';
	import useFecth from '../hooks/useFetch';
	const { filters } = useFecth();

	const theme = inject('theme');

	const emit = defineEmits(['updateListCountry']);

	watch(filters, (newVal, oldVal) => {
		emit('updateListCountry', newVal);
	});
</script>
<style scoped>
	.filter {
		display: flex;
		justify-content: space-between;
		padding: 30px 85px;
	}

	.shadow-input {
		box-shadow: 0 0 15px -5px var(--darkGray);
	}

	.input {
		position: relative;
	}

	input,
	select {
		font-size: 17px;
		border: none;
		border-radius: 5px;
	}

	input {
		width: 400px;
		padding: 15px 0;
	}

	input[type='text'] {
		padding-left: 50px;
	}

	input:focus,
	select:focus {
		outline: none;
	}

	input::placeholder {
		position: absolute;
		left: 60px;
	}

	.bx-search-alt-2 {
		position: absolute;
		top: 15px;
		left: 10px;
	}

	select {
		width: 200px;
		padding: 14px 0;
		padding-left: 10px;
	}

	.dark {
		background-color: var(--veryDarkGrayDarkTheme);
	}

	.dark .input > input,
	.dark .input > input::placeholder,
	.dark .select > select {
		background-color: var(--darkGrayDarkTheme);
		color: var(--white);
	}

	.dark .shadow-input {
		box-shadow: 0 0 15px -5px var(--darkGrayDarkTheme);
	}

	@media (max-width: 1300px) {
		.filter {
			justify-content: space-around;
			padding: 30px 0;
		}
	}

	@media (max-width: 768px) {
		.filter {
			flex-direction: column;
			margin: 0 auto;
			padding: 30px 85px;
			gap: 2rem;
		}
	}

	@media (max-width: 600px) {
		.filter {
			padding: 30px 70px;
		}
		input,
		select {
			width: 100%;
		}
	}
</style>
