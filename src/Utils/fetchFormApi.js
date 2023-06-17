const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'teDfWFc99hNTrU0PF80DnA==Ionpfw6ue13TvUyf',
	}
};

const fetchData = async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        return data;
        
    } catch (error) {
        console.error(error);
    }
};

export default fetchData;