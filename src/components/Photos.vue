<template>
	<div>
		<h1>About</h1>

		<form @submit.prevent="getPhotos">
			<input type="text" v-model="term" />
			<div v-if="error" class="error">{{ error }}</div>
			<div class="submit">
				<button>Search Image</button>
			</div>
		</form>
		<!-- <p>{{term }}</p> -->
		{{ photos }}
	</div>
</template>

<script>
// import getPhotos from "../composables/getPhotos";
import { ref, computed, onMounted } from 'vue';
import env from 'dotenv';
export default {
	props: [],
	setup(props) {
		const photos = ref([]);
		const term = ref('');
		const error = ref(null);

		const API_KEY = process.env.API_KEY;
		const headers = { Authorization: 'Client-ID ' + API_KEY };
		const getPhotos = () => {
			axios
				.get(
					'https://api.unsplash.com/search/photos?per_page=24&query=',
					{
						params: { id: term.value },
					},
					{ headers }
				)
				.then((response) => (photos.value = response));
		};

		//   const load = async () => {

		//     try {
		//       const response = await fetch(
		//         "https://api.unsplash.com/search/photos?per_page=24&query=" + term.value,
		//         {
		//           method: "GET",
		//           headers: {
		//             Authorization: "Client-ID " + API_KEY,
		//           },
		//         }
		//       );
		//       if (!response.ok) {
		//         throw Error("No data");
		//       }
		//       photos.value = await response.json();
		//     } catch (err) {
		//       //catches try block error
		//       error.value = err.message; //eqls message created in if try block
		//     }
		//   };

		// };

		// onMounted(() => {
		//    axios
		//   .get('https://api.unsplash.com/search/photos?per_page=24&query=' + term.value, {headers})
		//   .then(response => (photos.value = response))
		// });

		return { term, photos, error, loading };
	},
};
</script>

<style scoped>
form {
	max-width: 650px;
	margin: 30px auto;
	background: #fff;
	text-align: left;
	padding: 40px;
	border-radius: 10px;
}
label {
	color: #aaa;
	display: inline-block;
	margin: 25px 0 15px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1px;
}
input {
	display: block;
	padding: 10px 6px;
	box-sizing: border-box;
	border: none;
	color: #555;

	border-bottom: 1px solid lightgrey;
}
input[type='checkbox'] {
	display: inline-block;
	width: 16px;
	margin: 0 10px 0 0;
	position: relative;
	top: 2px;
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
	color: #777;
	cursor: pointer;
}
button {
	background: teal;
	border: 0;
	padding: 10px 20px;
	margin-top: 20px;
	color: #fff;
	border-radius: 20px;
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
</style>
