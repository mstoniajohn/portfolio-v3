import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {
	const post = ref(null);
	const error = ref(null);

	const load = async () => {
		try {
			let res = await projectFirestore
				.collection('posts')
				.doc(id)
				.get();
			if (!res.exists) {
				throw Error('That post does not exist');
			}
			post.value = { ...res.data(), id: res.id };

			//   await new Promise(resolve =>{
			//       setTimeout(resolve, 400)
			//   })
			// let data = await fetch('http://localhost:3000/posts/' + id)
			// if(!data.ok){
			//   throw Error('No data')
			// }
			// post.value = await data.json()
		} catch (err) {
			//catches try block error
			error.value = err.message; //eqls message created in if try block
		}
	};
	return {
		post,
		error,
		load,
	};
};
export default getPost;
