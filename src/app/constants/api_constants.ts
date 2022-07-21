export const BASE_API_URL = "http://ec2-3-101-147-163.us-west-1.compute.amazonaws.com:8090";

export const pokemon_request_url = {
    list:"/pokemon/list?offset=:OFFSET&limit=:LIMIT",
    detail:"/pokemon/get/:NAME"
};