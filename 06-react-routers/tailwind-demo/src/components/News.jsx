import { useEffect, useState } from "react";
import { fromIsoDate } from "../utils/fromIsoDate";
import Loader from './Loader';
import NewsOptions from "./NewsOptions";
import { useSearchParams } from "react-router";


// const topHeadlinesUrl = 'https://real-time-news-data.p.rapidapi.com/top-headlines?limit=500&country=US&lang=en';
// const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const defaultImgUrl = 'https://imgs.search.brave.com/S48UjlK-XHWe6qNTXPPiny-vAUovO67DpMoJcw_0iTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY1LzI2LzE2/LzM2MF9GXzE2NTI2/MTY4MF9YQ3d6S09K/S0JRaktCenRzUlVa/YnpDbWdNaldmUnJW/by5qcGc';

export default function News() {

	const [initialPosts, setInitialPosts] = useState([]);
	const [posts, setPosts] = useState([]);
	const [pending, setPending] = useState(false);
	const [searchParams] = useSearchParams();


	console.log('render')

	useEffect(() => {
		fetch('./data/newsPosts.json')
		.then(result => result.json())
		.then(data => {
			setTimeout(() => {setInitialPosts(data)}, 1500);
			setPending(true);
		})
	}, [])

	useEffect(() => {

		// This one is The API Call. Disabled because of request limit of 100 per month. 
		// const options = {
		//   method: 'GET',
		//   headers: {
		//     'x-rapidapi-key': apiKey,
		//     'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
		//   }
		// };

		// const getNews = async () => {
		//   const response = await fetch(topHeadlinesUrl, options);
		//   const json = await response.json();
		//   const data = await json.data;
		//   setPosts(data);
		//   console.log(data);
		// };

		// getNews();

		console.log('useEfect Render')

		const params = Object.fromEntries(searchParams);

		if (params.filter && params.filter === 'withAuthors') {
			setPosts([...initialPosts].filter(post => post.authors.length > 0));
		} else if (params.filter && params.filter === 'withoutAuthors') {
			setPosts([...initialPosts].filter(post => post.authors.length === 0));
		} else {
			setPosts([...initialPosts]);
		}

		initialPosts.length > 0 ? setPending(false) : null;

		console.log('INITIAL POSTS: ', initialPosts);

	}, [searchParams, initialPosts])


	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
						Daily Top News Headlines
					</h2>
					<p className="mt-2 text-lg/8 text-gray-600">
						Learn what is moving the world today, with the top news headlines.
					</p>
				</div>
				<NewsOptions />

				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{
						pending && <Loader />
					}
					{
						pending && <Loader />
					}
					{
						pending && <Loader />
					}

					{posts.map((post) => (
						<article key={post.link} className="flex max-w-xl flex-col items-start justify-between">
							<img src={post.photo_url ? post.photo_url : defaultImgUrl} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
							<div className="flex items-center gap-x-4 text-xs mt-4">
								<time dateTime={fromIsoDate(post.published_datetime_utc)} className="text-gray-500">
									{fromIsoDate(post.published_datetime_utc)}
								</time>
								<a href={post.source_url} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
									{post.source_name}
								</a>
							</div>
							<div className="group relative">
								<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
									<a href={post.link}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
								<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.snippet}</p>
							</div>
							<div className="relative mt-8 flex items-center gap-x-4">
								<img alt="" src={post.source_logo_url ? post.source_logo_url : defaultImgUrl} className="size-10 rounded-full bg-gray-50" />
								<div className="text-sm/6">
									<p className="font-semibold text-gray-900">
										<a href="#">
											<span className="absolute inset-0" />
											{post.authors.length > 0 ? post.authors.join(', ') : 'Unknown'}
										</a>
									</p>
									<p className="text-gray-600">Writer</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}