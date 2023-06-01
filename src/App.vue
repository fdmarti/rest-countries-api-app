<template>
	<Navbar :toggleThemeState="toggleTheme" :theme="state.theme" />
	<router-view></router-view>
</template>
<script setup>
	import { reactive } from '@vue/reactivity';
	import { provide } from '@vue/runtime-dom';
	import { Navbar } from './components/index';

	const state = reactive({
		theme: 'Dark mode',
	});

	provide('theme', state);

	const checkThemeMode = (value = 'Dark mode') => {
		localStorage.setItem('theme', value);
		state.theme = value;

		const body = document.body;

		if (state.theme === 'Dark mode') {
			body.classList.add('light');
			body.classList.remove('dark');
		} else {
			body.classList.add('dark');
			body.classList.remove('light');
		}
	};

	const toggleTheme = () => {
		state.theme = state.theme === 'Dark mode' ? 'Light mode' : 'Dark mode';
		checkThemeMode(state.theme);
	};

	checkThemeMode(localStorage.getItem('theme'));
</script>
