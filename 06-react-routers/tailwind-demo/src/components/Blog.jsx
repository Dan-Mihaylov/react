import { useEffect, useState } from "react";
import { fromIsoDate } from "../utils/fromIsoDate";

// const posts = [
//   {
//     id: 1,
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   // More posts...
// ]

const topHeadlinesUrl = 'https://real-time-news-data.p.rapidapi.com/top-headlines?limit=500&country=US&lang=en';
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const defaultImgUrl = 'https://imgs.search.brave.com/S48UjlK-XHWe6qNTXPPiny-vAUovO67DpMoJcw_0iTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY1LzI2LzE2/LzM2MF9GXzE2NTI2/MTY4MF9YQ3d6S09K/S0JRaktCenRzUlVa/YnpDbWdNaldmUnJW/by5qcGc';

export default function Blog() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
      }
    };

    const getNews = async () => {
      const response = await fetch(topHeadlinesUrl, options);
      const json = await response.json();
      const data = await json.data;
      setPosts(data);
      console.log(data);
    };

    getNews();


  }, [])


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
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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