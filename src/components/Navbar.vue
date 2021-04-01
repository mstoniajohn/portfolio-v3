<template>
	<header>
		<!-- <router-link :to="{ name: 'Home' }"><h1>Blog</h1></router-link> -->

		<!-- <div class="nav">
			<a href="/create">Create</a>
			<router-link :to="{ name: 'Home' }">Home</router-link>
			<router-link :to="{ name: 'Create' }">Create Post</router-link>
			<router-link :to="{ name: 'About' }">About</router-link>
			<router-link :to="{ name: 'Blog' }">Blog</router-link>
		</div> -->
		<div id="themes" class="d-flex justify-content-end p-2 mb-0">
			<span ref="changesvg" @click="changeTheme" class="theme pr-2">
				<!-- <i id="icon-theme" class="bi bi-brightness-high-fill"></i> -->

				<svg
					id="theme-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-brightness-high-fill"
					view-box="0 0 16 16"
				>
					<path
						d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
					/>
				</svg>
				<i id="icon-theme" class="bi bi-brightness-high-fill"></i>
			</span>
		</div>

		<nav
			style="background-color: transparent;"
			id="navbar"
			class="navbar navbar-expand-lg bg-transparent d-flex align-items-end"
		>
			<span class="navbar-brand mr-auto">
				<a id="logo" href="/">
					<img id="logoz" src="../assets/logo.svg" alt="logo" />
				</a>
			</span>
			<div class="menu-icon navbar-toggler " @click="handleClick">
				<div v-if="click">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-x h1"
						view-box="0 0 16 16"
					>
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</div>
				<div v-else>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-list"
						view-box="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</div>
			</div>
			<ul :class="menuActive">
				<li class="nav-item">
					<a href="/" class="nav-links" @click="closeMobileMenu">
						Home
					</a>
				</li>
				<li class="nav-item">
					<a href="/projects" class="nav-links" @click="closeMobileMenu">
						Projects
					</a>
				</li>
				<li class="nav-item">
					<a href="/blog" @click="closeMobileMenu">
						Blog
					</a>
				</li>
				<li class="nav-item">
					<a href="/contact" class="nav-links" @click="closeMobileMenu">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import { ref } from '@vue/reactivity';
import gsap from 'gsap';
import { onMounted } from '@vue/runtime-core';

export default {
	setup() {
		const click = ref(false);
		const menuActive = ref('nav-menu');
		const closeMobileMenu = () => {
			click.value = false;
		};
		const handleClick = () => {
			click.value = !click.value;
			console.log(click);
			menuActive.value = click.value ? 'nav-menu active' : 'nav-menu';
		};

		const changeTheme = () => {
			document.body.classList.toggle('light');
			document.body.classList.toggle('dark');
			let color = document.body.classList.value;

			if (color === 'dark') {
				localStorage.setItem('theme', color);

				// isDark && document.body.classList.add('dark');
			} else if (!color) {
				color = 'light';
				localStorage.setItem('theme', color);
			}
			localStorage.setItem('theme', color);
		};
		const t = localStorage.getItem('theme');
		document.body.classList.value = '';
		document.body.classList.add(t);

		const logo = document.getElementById('logoz');

		onMounted(() => {
			gsap.from('#logoz', {
				duration: 3,
				x: 300,
				opacity: 0,
				scale: 0.3,
				// ease: 'bounce',
			});
		});

		return { changeTheme, closeMobileMenu, click, handleClick, menuActive };
	},
};
</script>

<style>
/* header {
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 10px;
}
header h1 {
	color: #dfdfdf;
	font-size: 48px;
}
header .nav a {
	color: #bbb;
	text-decoration: none;
	margin-left: 20px;
}
header .nav a.rounter-link {
	color: #444;
	font-weight: bold;
} */
/* h1 a{
    text-decoration: none;
    margin-left: 20px;
} */
</style>
