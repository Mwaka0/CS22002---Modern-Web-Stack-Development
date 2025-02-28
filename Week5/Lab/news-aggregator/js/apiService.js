const NEWS_API_KEY = "d662c076644e427fa6916fc7856a8083";
const GUARDIAN_API_KEY = "YOUR_GUARDIAN_API_KEY";
const NYT_API_KEY = "YOUR_NYT_API_KEY";

// API URLs
const NEWS_API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;
const GUARDIAN_API = `https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}`;
const NYT_API = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYT_API_KEY}`;

export async function fetchNews() {
    try {
        const response = await Promise.allSettled([
            fetch(NEWS_API),
            fetch(GUARDIAN_API),
            fetch(NYT_API)
        ]);

        const results = await Promise.all(
            
        );
    }
}