<template>
	<div class="container mb-10">
		<div v-if="!loading">
			<DataTitle :text="title" :dataDate="dataDate" />
			<DataBoxes :stats="stats" />
			<CountrySelect @get-country="getCountryData" :countries="countries" />
			<button
				@click="clearCountryData"
				v-if="stats.Country"
				class="bg-blue-700 text-white rounded p-3 mt-10 hover:bg-blue-600 focus:outline-none"
			>
				Clear Country
			</button>
		</div>
		<div class="d-flex align-items-center justify-content-center" v-else>
			<div>
				fetching data
			</div>
			<img :src="loadingImg" alt="" />
		</div>

		<!-- <button @click="posts.pop()">Delete Post</button> -->
	</div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted, onBeforeMount } from 'vue';
import Spinner from '../components/Spinner';
import Projects from '../components/Projects';
import DataBoxes from '@/components/DataBoxes';
import CountrySelect from '@/components/CountrySelect';

import DataTitle from '../components/DataTitle';
import Pic from './Pic';

import getPhotos from '../composables/getPhotos';

export default {
	name: 'Home',
	components: { Spinner, Projects, Pic, DataTitle, DataBoxes, CountrySelect },
	setup() {
		const data = ref([]);
		const loadData = ref([]);
		const title = ref('Global');
		const loading = ref(true);
		const countries = ref([]);
		const stats = ref({});
		const loadingImg = require('../assets/spinner.gif');
		const dataDate = ref('');

		const { posts, error, load } = getPhotos();

		// console.log(posts, error);

		// Init On DOM Load
		// Init App

		const handleClick = async (e) => {
			e.preventDefault();

			const res = await fetch('https://api.covid19api.com/summary');
			data.value = await res.json();
			console.log('data', data.value);
		};
		const getCountryData = (country) => {
			stats.value = country;
			title.value = country.Country;
		};
		const clearCountryData = async () => {
			loading.value = true;
			const res = await fetch('https://api.covid19api.com/summary');
			const data = await res.json();
			title.value = 'Global';
			// dataDate.value = data.Date;
			// countries.value = data.Countries;

			stats.value = data.Global;
			loading.value = false;
		};

		onBeforeMount(() => {
			const fetchData = async () => {
				const res = await fetch('https://api.covid19api.com/summary');
				const dataRes = await res.json();
				countries.value = dataRes.Countries;
				dataDate.value = dataRes.Date;
				stats.value = dataRes.Global;
				loading.value = false;

				console.log('load', dataRes);
			};
			fetchData();
		});
		return {
			error,
			data,
			handleClick,
			loadingImg,
			title,
			dataDate,
			loading,
			stats,
			countries,
			getCountryData,
			clearCountryData,
		};

		// var InputUsername = projectAuth.currentUser;
		// const InputMessage = ref('');
		// const router = useRouter();
		// const state = reactive({
		// 	username: '',
		// 	messages: [],
		// });
		// if (InputUsername != null) {
		// 	state.username = InputUsername.email.split('@')[0];
		// }
		// 	const SendMesage = () => {
		// 	const messagesRef = db.ref('messages');
		// 	if (InputMessage.value === '' || InputMessage.value === null) {
		// 		return;
		// 	}
		// 	const message = {
		// 		username: state.username,
		// 		content: InputMessage.value,
		// 	};
		// 	messagesRef.push(message);
		// 	InputMessage.value = '';
		// };
	},
};
</script>
