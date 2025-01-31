"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface NewsPageProps {
  searchQuery: string;
  language: string;
  sortBy: string;
  isInitialLoad: boolean;
}

const NewsPage = ({ searchQuery, language, sortBy, isInitialLoad }: NewsPageProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      if (isInitialLoad && !searchQuery) {
        
        try {
          const response = await axios.get("https://newsapi.org/v2/top-headlines", {
            params: {
              country: "us",
              language,
              apiKey: process.env.NEXT_PUBLIC_API_TOKEN,
            },
          });
          setArticles(response.data.articles);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch news");
          setLoading(false);
        }
      } else if (searchQuery) {
        
        try {
          const response = await axios.get("https://newsapi.org/v2/everything", {
            params: {
              q: searchQuery,
              language,
              sortBy,
              apiKey: process.env.NEXT_PUBLIC_API_TOKEN,
            },
          });
          setArticles(response.data.articles);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch news");
          setLoading(false);
        }
      }
    };

    fetchNews();
  }, [isInitialLoad]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
            {article.urlToImage && (
              <div className="relative w-full h-48">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{article.title}</h2>
              <p className="text-gray-500 text-base mb-4">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
              <p className="text-gray-500 text-sm mt-2">
                Published on: {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
