
import  { useState ,useEffect} from 'react';
import axios from 'axios';


interface NFT {
  name: string;
  imageUrl: string;
  // Define other properties as needed
}
const Collection:React.FC  = () => {
  const [nfts, setNfts] = useState([]);

  const fetchData = async () => {
    const options = {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'ca66968a9b6740e081bb3b8b050b2bf6',
      },
    };

    try {
      const response = await axios.get('https://api.opensea.io/v2/chain/bsc/account/0x5ff83cde915331b6ae6ae3b966b26b9de3614584/nfts?limit=50', options);
      setNfts(response.data);
      console.log(response,"---Response")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(nfts,"--nftcollect")

  return (
    <div>

    </div>
  );
};

export default Collection;
