<template>
	<div
		class="spinner"
		:class="theme.theme === 'Dark mode' ? 'light' : 'dark'"
	></div>
</template>
<script setup>
	import { inject } from '@vue/runtime-dom';
	const theme = inject('theme');
</script>
<style scoped>
	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border-left-color: var(--borderSpinner);

		animation: spin 1s ease infinite;
		position: absolute;
		top: 50%;
		left: 50%;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
