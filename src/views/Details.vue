<template>
	<div class="container">
		<h2>Details</h2>
		<div v-if="error">{{ error }}</div>
		<div v-if="post" class="posts">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
			<button class="btn" @click="handleClick">Delete Post</button>
		</div>
		<div v-else>
			<Spinner />
		</div>
	</div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '../firebase/config';
export default {
	props: ['id'],
	components: { Spinner },
	setup(props) {
		const route = useRoute();
		const router = useRouter();
		const { post, error, load } = getPost(route.params.id);
		// const {post, error, load} = getImage(props.id)
		load();
		const handleClick = async () => {
			await projectFirestore
				.collection('posts')
				.doc(props.id)
				.delete();
			router.push('/');
		};
		return { post, error, handleClick };
	},
};
</script>

<style></style>
