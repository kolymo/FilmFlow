export default async function FetchData(options) {
    if (!("endpoints" in options)) {
        return null;
    }

    let url = "https://api.themoviedb.org/3/";
    url += options.endpoints.join("/");

    const apiKey = "9e3314fb4fe8b26b5bb0f1860ef47fbd";
    url += "?api_key=" + apiKey;

    if ("language" in options && options.language !== false) {
        const language = "en-CA";
        url += "&language=" + language;
    }

    if ("page" in options) url += "&page=" + options.page;

    if ("params" in options && options.params.query !== null) {
        url += "&query=" + encodeURIComponent(options.params.query);

        if (options.params.include_adult !== null) {
            url += "&include_adult=" + options.params.include_adult;
        }
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);

        throw error;
    }
}

// Put all the films inside
export const films = {
    popular: (page = 1, language = "en-CA") => {
        // Popular => https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
        return FetchData({
            endpoints: ["movie", "popular"],
            language: language,
            page: page,
        });
    },
    toprated: (page = 1, language = "en-CA") => {
        // Top Rated => https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
        return FetchData({
            endpoints: ["movie", "top_rated"],
            language: language,
            page: page,
        });
    },
    upcoming: (page = 1, language = "en-CA") => {
        // Upcoming => https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
        return FetchData({
            endpoints: ["movie", "upcoming"],
            language: language,
            page: page,
        });
    },
    trending: (time = "day", page = 1, language = "en-CA") => {
        // Trending Movies => https://api.themoviedb.org/3/trending/movie/day?language=en-US
        return FetchData({
            endpoints: ["trending", "movie", time],
            language: language,
            page: page,
        });
    },
    details: (movie_id, language = "en-CA") => {
        // Details => https://api.themoviedb.org/3/movie/movie_id?language=en-US
        return FetchData({
            endpoints: ["movie", movie_id],
            language: language,
        });
    },
    images: (movie_id) => {
        // Images => https://api.themoviedb.org/3/movie/movie_id/images
        return FetchData({
            endpoints: ["movie", movie_id, "images"],
            language: false,
        });
    },
    videos: (movie_id, language = "en-CA") => {
        // Videos => https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US
        return FetchData({
            endpoints: ["movie", movie_id, "videos"],
            language: language,
        });
    },
    credits: (movie_id, language = "en-CA") => {
        // Movie Credits (Actors / Cast list) => https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US
        return FetchData({
            endpoints: ["movie", movie_id, "credits"],
            language: language,
        });
    },
};

export const search = {
    title: async (query, page = 1, language = "en-CA") => {
        // Title Search => https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
        const values = await FetchData({
            endpoints: ["search", "movie"],
            params: {
                query: query,
                include_adult: true,
                language: language,
                page: page,
            },
        });
        console.log(values);
        return values;
    },
    actors: (query, page = 1) => {
        // Actors Search => https://api.themoviedb.org/3/search/person?api_key=THE_KEY&query=Jim+Carrey
        return FetchData({
            endpoints: ["search", "person"],
            params: {
                query: query,
                language: false,
                page: page,
            },
        });
    },
    all: async (query, page = 1) => {
        return {
            titles: await search.title(query, page),
            actors: await search.actors(query, page),
        };
    },
};

/*

Actors details => https://api.themoviedb.org/3/person/person_id?language=en-US

*/
