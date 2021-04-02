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
				<a :href="photo.links.download" download>
					<img class="img" :src="photo.urls.small" alt="" />
				</a>
				<span
					class="details pt-2 p-1"
					:style="{ backgroundColor: photo.color + '55' }"
				>
					<p class="text-center">
						{{ photo.description ? photo.description : 'No description' }}
					</p>
					<p class="m-2 text-center">
						<strong
							>By:
							<a
								:style="{
									fontWeight: 700,
									borderBottom: '2px solid' + photo.color + 'ff',
									color: 'var(--text)',
								}"
								:href="photo.user.portfolio_url"
								target="_blank"
							>
								{{ photo.user.name }}
							</a>
						</strong>
					</p>
					<p class="text-center d-flex justify-content-around">
						<span
							@click="downloadImage"
							:style="{
								fontWeight: 700,
								borderBottom: '2px solid' + photo.color + 'ff',
							}"
							><a
								ref="imageSrc"
								:style="{
									textDecoration: none,
									backgroundColor: photo.color + '22',

									color: 'var(--text)',
								}"
								:href="photo.links.download"
								download
							>
								View in New Tab
							</a>
						</span>
						<span> {{ photo.likes }} &#x2661;</span>
					</p>
				</span>
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
		const imageSrc = ref(null);

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
		// Using fetch
		const downloadImage = async () => {
			const image = await fetch(imageSrc.value.href);
			const imageBlog = await image.blob();
			const imageURL = URL.createObjectURL(imageBlog);

			// const link = document.createElement('a');
			imageSrc.value.href = imageURL;

			// document.body.appendChild(link);
			imageSrc.value.click();
			// document.body.removeChild(link);
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

		return { term, photos, error, getPhotos, imageSrc, downloadImage };
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
