import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPosts = () => {
	const posts = ref([]);
	const error = ref(null);

	const load = async () => {
		try {
			const res = await projectFirestore
				.collection('posts')
				.orderBy('createdAt', 'desc')
				.get();
			//res is an object and not the data..get the docs object array the data
			posts.value = res.docs.map((doc) => {
				//get data and spread in object and add id
				return { ...doc.data(), id: doc.id };
			});
			//   await new Promise(resolve=>{
			//     setTimeout(resolve, 400)
			// })
			//   let data = await fetch('http://localhost:3000/posts')
			//   if(!data.ok){
			//     throw Error('No data')
			//   }
			//   posts.value = await data.json()
		} catch (err) {
			//catches try block error
			error.value = err.message; //eqls message created in if try block
		}
	};
	return {
		posts,
		error,
		load,
	};
};
export default getPosts;
