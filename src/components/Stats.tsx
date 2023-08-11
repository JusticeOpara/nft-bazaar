import { useEffect } from "react";
import axios from "axios";
import Container from "./Container";

const Stats = () => {

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                headers: {
                    accept: 'application/json',
                    'X-API-KEY': 'ca66968a9b6740e081bb3b8b050b2bf6',
                },
            };

            try {
                const response = await axios.get('https://api.opensea.io/v2/chain/bsc/account/0x5ff83cde915331b6ae6ae3b966b26b9de3614584/nfts?limit=50', options);
                console.log(response.data);
                // const response = await axios.get('https://api.opensea.io/v2/listings/collection/cool-cats-nft/all?limit=50', options);


            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <Container>
            <div className="bg-gray-500 w-[100%] h-[100%]">

            </div>
        </Container>

    )
}
export default Stats

