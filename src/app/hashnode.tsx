import axios from 'axios';

const HASHNODE_API_URL = 'https://api.hashnode.com/';
//check

export const fetchHashnodeData = async (graphqlQuery : any) => {
  try {
    const response = await axios.post(
      `${HASHNODE_API_URL}`,
      {
        query: graphqlQuery,
      }
    );

    return response.data.data;
  } catch (error) {
    console.error('Error fetching Hashnode data:', error);
    throw error;
  }
};
