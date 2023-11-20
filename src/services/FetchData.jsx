export default async function FetchData() {
    try {
      const response = await fetch('https://api.themoviedb.org/3/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}