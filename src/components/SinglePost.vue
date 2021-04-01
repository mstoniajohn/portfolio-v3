<template>
	<div class="post">
		<router-link :to="{ name: 'Details', params: { id: post.id } }">
			<h3>{{ post.title }}</h3>
		</router-link>
		<p>{{ snippet }}</p>
		<span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
	</div>
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['post'],
	setup(props) {
		const snippet = computed(() => {
			//substring(0, 100 ) returns first 100 characters of the string
			return props.post.body.substring(0, 100) + '...';
		});
		return { snippet };
	},
};
</script>

<style scoped>
.post {
	margin: 0 40px 30px;
	padding-bottom: 30px;
	border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
	display: inline-block;
	position: relative;
	font-size: 26px;
}
</style>
