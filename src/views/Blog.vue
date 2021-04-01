<template>
	<div class="container">
		<h2 class="text-center">Blog</h2>
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length">
			<PostList :posts="posts" />
			<TagCloud :posts="posts" />
		</div>
		<div v-else>
			<Spinner />
		</div>

		<!-- <button @click="posts.pop()">Delete Post</button> -->
	</div>
</template>

<script>
import { ref } from 'vue';
import Spinner from '../components/Spinner';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import getPosts from '../composables/getPosts';
export default {
	components: { PostList, Spinner, TagCloud },
	setup() {
		const { posts, load, error } = getPosts();
		load();
		return { posts, error };
	},
};
</script>

<style></style>
