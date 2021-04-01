<template>
	<div>
		<h2 class="text-center mt-4 mb-0">Search for a random image.</h2>

		<form class="mt-0" @submit.prevent="getPhotos">
			<input type="text" v-model="term" />
			<div v-if="error" class="error">{{ error }}</div>
			<div class="submit">
				<button class="btn">Search Image</button>
			</div>
		</form>
		<div v-if="photos" class="grid">
			<div class="img-div" v-for="photo in photos.results" :key="photo.id">
				<a download="image" href="{{photo.links.download}}">
					<img class="img" :src="photo.urls.small" alt="" />
				</a>

				<span class="details">
					<strong
						>By:
						<a :href="photo.user.portfolio_url" target="_blank">{{
							photo.user.name
						}}</a></strong
					>
					<span>&#x2661; {{ photo.likes }} color: {{ photo.color }}</span>
					<span
						><a href="{{photo.links.download}}" download="image.png"
							>download</a
						></span
					>
				</span>
				<p>{{ photo.description }}</p>
				<p>
					<svg
						fill="none"
						height="24"
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
					</svg>
					@{{ photo.user.instagram_username }}
				</p>
			</div>
		</div>
		<div v-else>
			{{ Spinner }}
		</div>
		<!-- <p>{{term }}</p> -->
	</div>
</template>

<script>
// import getPhotos from "../composables/getPhotos";
import Spinner from '../components/Spinner';

import axios from 'axios';
import dotenv from 'dotenv';
import { ref, computed, onMounted } from 'vue';

export default {
	props: [],
	components: { Spinner },
	setup(props) {
		dotenv.config();
		const photos = ref([]);
		const term = ref('');
		const error = ref(null);

		const headers = {
			Authorization: 'Client-ID ' + `${process.env.VUE_APP_API_KEY}`,
		};
		const getPhotos = async () => {
			// ////////////////////////////////////////////////////
			try {
				const response = await fetch(
					`https://api.unsplash.com/search/photos?per_page=100&query=${term.value}`,
					{
						method: 'GET',
						headers: {
							Authorization: 'Client-ID ' + `${process.env.VUE_APP_API_KEY}`,
						},
					}
				);
				if (!response.ok) {
					throw Error('No data');
				}
				photos.value = await response.json();
				console.log(photos.value);
			} catch (err) {
				//catches try block error
				error.value = err.message; //eqls message created in if try block
			}
		};

		// const load = async () => {
		// 	try {
		// 		const response = await fetch(
		// 			'https://api.unsplash.com/search/photos?per_page=24&query=' +
		// 				term.value,
		// 			{
		// 				method: 'GET',
		// 				headers: {
		// 					Authorization: 'Client-ID ' + API_KEY,
		// 				},
		// 			}
		// 		);
		// 		if (!response.ok) {
		// 			throw Error('No data');
		// 		}
		// 		photos.value = await response.json();
		// 	} catch (err) {
		// 		//catches try block error
		// 		error.value = err.message; //eqls message created in if try block
		// 	}
		// };

		// // };

		// onMounted(() => {
		// 	getPhotos();
		// 	// axios
		// 	// 	.get(
		// 	// 		'https://api.unsplash.com/search/photos?per_page=24&query=' +
		// 	// 			term.value,
		// 	// 		{ headers }
		// 	// 	)
		// 	// 	.then((response) => (photos.value = response));
		// });

		return { term, photos, error, getPhotos };
	},
};
</script>

<style>
form {
	width: 100%;
	margin: 0 auto;
	/* background: #fff; */
	/* text-align: left; */
	padding: 40px;
	border-radius: 10px;
}
label {
	color: var(--text);
	display: inline-block;
	margin: 25px 0 15px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1px;
}
input {
	display: block;
	padding: 10px 6px;
	border: none;
	color: #333;
	border-bottom: 2px solid var(--bg);
}

.pill {
	display: inline-block;
	padding: 16px 12px;
	margin: 20px 10px 0 0;
	background: #eee;
	border-radius: 20px;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
	color: var(--text);
	cursor: pointer;
}

.submit {
	text-align: center;
}
.error {
	color: #ff0062;
	margin-top: 10px;
	font-size: 0.8em;
	font-weight: bold;
}
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 1rem;
	width: 100%;
}
.grid .img {
	object-fit: cover;
	width: 100%;
	height: 200px;
}
.img-div {
	border: 1px solid var(--bg);
	display: flex;
	flex-direction: column;
}
</style>
