import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonApi"



export const registerAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/register`, user, "")
}

export const loginAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/users/login`, user, "")
}

// api for add project
export const addProject = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/project/add`, reqBody, reqHeader)
}

// home project

export const HomeProject = async () => {
    return await commonAPI("GET", `${BASE_URL}/projects/Home-projects`);
};

//   all projects
export const allProjectApi = async (secretekey, reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/project/all?search=${secretekey}`, "", reqHeader);
};
// user projects 
export const userProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/user/all-projects`, "", reqHeader);
};
// edit project

export const editProject  = async (projectId,reqBody,reqHeader) => {
    return await commonAPI("PUT", `${BASE_URL}/projects/edit/${projectId}`, reqBody, reqHeader);
};

export const deleteProject = async (projectid, reqHeader) =>{
        return await commonAPI("DELETE", `${BASE_URL}/projects/remove/${projectid}`, {}, reqHeader);

}