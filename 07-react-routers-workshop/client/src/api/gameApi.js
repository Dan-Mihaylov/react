import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import request from "../utils/requester";
import { useAuthHeaders } from "./authApi";

const baseUrl = 'http://localhost:3030/data/games';

export const useCreateGame = () => {
    const { accessToken } = useContext(UserContext);
    
    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    } 

    const create = async (gameData) => request(baseUrl, 'POST', gameData, options); 

    return {
        create
    }
};

export const useGames = () => {
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        request(baseUrl)
        .then(setGames)
    }, [])

    return {
        games,
    }

};

export const useGame = (gameId) => {
    const [ game, setGame ] = useState({});

    useEffect(() => {
        request(`${baseUrl}/${gameId}`)
        .then(setGame);

    }, [gameId]);

    return {
        game,
    }
}

export const useGameEdit = () => {
    const { options } = useAuthHeaders();

    const edit = async (gameId, gameData) => {
        const result = await request(`${baseUrl}/${gameId}`, 'PUT', {...gameData, _id: gameId}, options);
        return result;
    };

    return {
        edit,
    }

}

export const useGameDelete = () => {
    const { options } = useAuthHeaders();

    const deleteGame = async (gameId) => {
        const result = await request(`${baseUrl}/${gameId}`, 'DELETE', null, options);
        return result;
    };

    return {
        deleteGame,
    }
}

export const useLatestGames = () => {
    const [games, setGames] = useState([]);

    
    useEffect(() => {

        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,imageUrl,title'
        });
        
        console.log(`${baseUrl}?${searchParams.toString()}`)
        request(`${baseUrl}?${searchParams.toString()}`, 'GET')
        .then(setGames)

    }, []);

    return {
        games
    }
};
