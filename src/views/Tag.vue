<template>
	<div>
		<h2>Tags</h2>
		<p v-if="error">{{ error }}</p>
		<div v-if="posts.length">
			<PostList :posts="postTags" />
			<TagCloud :posts="posts" />
		</div>
		<div v-else>
			<Spinner />
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Spinner from '../components/Spinner';
import TagCloud from '../components/TagCloud';
import PostList from '../components/PostList';
import getPosts from '../composables/getPosts';

export default {
	components: { PostList, Spinner, TagCloud },
	props: ['tag'],
	setup(props) {
		const route = useRoute();
		const { error, posts, load } = getPosts();
		load();

		const postTags = computed(() => {
			return posts.value.filter((post) => post.tags.includes(route.params.tag));
		});
		console.log(postTags);

		return { postTags, posts, error };
	},
};
</script>

<style></style>
