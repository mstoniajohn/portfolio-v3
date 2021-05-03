<template>
	<div class="text-center mt-5 mb-5">
		<h2 class="text-3xl">{{ text }}</h2>
		<div class="font-bold p-3">
			{{ timestamp }}
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import { computed } from 'vue';
export default {
	name: 'DataTitle',
	props: ['text', 'dataDate'],
	setup(props) {
		const timestamp = computed(() => {
			//substring(0, 100 ) returns first 100 characters of the string
			return moment(props.dataDate).format('MMMM Do YYYY, h:mm:ss a');
		});
		return { timestamp };
	},
};
</script>

<style></style>
