<template>
	<div class="container">
		home
		<button @click="handleClick">fetch</button>
		<div v-if="!loading">
			<DataTitle :text="title" :dataDate="dataDate" />
			<DataBoxes :stats="stats" />
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

import DataTitle from '../components/DataTitle';
import Pic from './Pic';

import getPhotos from '../composables/getPhotos';

export default {
	name: 'Home',
	components: { Spinner, Projects, Pic, DataTitle, DataBoxes },
	setup() {
		const data = ref([]);
		const loadData = ref([]);
		const title = ref('Global');
		const loading = ref(true);
		const contries = ref([]);
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

		onBeforeMount(() => {
			const fetchData = async () => {
				const res = await fetch('https://api.covid19api.com/summary');
				const dataRes = await res.json();
				contries.value = dataRes.Contries;
				dataDate.value = dataRes.Date;
				stats.value = dataRes.Global;
				loading.value = false;

				console.log('load', dataRes);
			};
			fetchData();
		});
		return { error, data, handleClick, loadingImg, title, dataDate, loading };

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
