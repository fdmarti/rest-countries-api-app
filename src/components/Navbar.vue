<template>
	<nav :class="theme === 'Dark mode' ? 'light' : 'dark'">
		<section class="title">
			<h1>Where in the world?</h1>
		</section>
		<section class="change-mode-section" @click="toggleThemeState">
			<i class="bx bx-moon bx-sm" v-if="theme === 'Dark mode'"></i>
			<i class="bx bxs-sun bx-sm" v-else></i>
			<span>{{ theme }}</span>
		</section>
	</nav>
</template>
<script setup>
	const { toggleThemeState, theme } = defineProps([
		'toggleThemeState',
		'theme',
	]);
</script>
<style scoped>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px 70px;
		background-color: var(--veryDarkGray);
		box-shadow: 0 10px 15px -15px var(--darkGray);
	}

	.dark {
		background-color: var(--darkGrayDarkTheme);
		box-shadow: 0 10px 15px -15px var(--veryDarkGrayDarkTheme);
		color: var(--white);
	}

	h1 {
		font-size: 21px;
	}

	.change-mode-section {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.change-mode-section:hover {
		cursor: pointer;
	}

	.change-mode-section span {
		font-weight: 700;
	}

	.bxs-sun {
		color: #fdff77;
	}

	@media (max-width: 600px) {
		nav {
			padding: 40px 15px;
		}
	}
</style>
