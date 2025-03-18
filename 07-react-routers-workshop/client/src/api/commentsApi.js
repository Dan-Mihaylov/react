import { useEffect, useState } from "react"
import request from "../utils/requester";
import { useAuthHeaders } from "./authApi";

const baseUrl = 'http://localhost:3030/data/comments'

export const useComments = (gameId) => {

    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams({
            where: `gameId="${gameId}"`
        });

        request(`${baseUrl}?${urlSearchParams.toString()}`, 'GET')
        .then(setComments);

    }, [gameId]);

    return {
        comments,
        setComments
    }
}

export const useCommentsCreate = () => {

    const { options } = useAuthHeaders();

    const create = async (commentData) => {
        const result = await request(baseUrl, 'POST', commentData, options);
        return result;
    };

    return {
        create,
    }

}
