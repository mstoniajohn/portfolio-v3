<template>
	<div class="text-center">
		<h2>{{ text }}</h2>
		<div class="div">
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
