import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError } from './helperFunctions';
import RNRestart from 'react-native-restart';
import { Alert } from 'react-native';

export const BASE_URL = 'https://temple-backend-rosy.vercel.app/api/';
// export const BASE_URL = 'https://www.techfinssolutions.com/api/';


export async function getHeaders() {
  let token = await getItem('token');
  console.log("token in api", token);
  if (token) {
    return {
      Authorization: 'Bearer ' + token,
    };
  }
  return {};
}

// export async function apiReq(
//   endPoint,
//   data,
//   method,
//   headers,
//   requestOptions = {},
// ) {

//   return new Promise(async (res, rej) => {
//     const getTokenHeader = await getHeaders();
//     headers = {
//       ...getTokenHeader,
//       ...headers,
//     };

//     if (method === 'get' || method === 'delete') {
//       data = {
//         ...requestOptions,
//         ...data,
//         headers,
//       };
//     }

//     axios[method](BASE_URL + endPoint, data, {headers})
//       .then(result => {
//         const {data} = result;

//         if (data.status === false) {
//           return rej(data);
//         }

//         return res(data);
//       })
//       .catch(error => {
//         console.log(error);
//         console.log(error && error.response, 'the error response');
//         if (error && error.response && error.response.status === 401) {
//           showError('User is not authorized');
//           clearAsyncStorage();
//           setTimeout(() => {
//             RNRestart.restart();
//           }, 1000);
//           // NavigationService.resetNavigation();
//           //NavigationService.navigate('loginUsingEmailScreen');
//         }
//         if (error && error.response && error.response.data) {
//           if (!error.response.data.message) {
//             return rej({
//               ...error.response.data,
//               msg: error.response.data.message || 'Network Error',
//             });
//           }
//           return rej(error.response.data);
//         } else {
//           return rej({message: 'Network Error', msg: 'Network Error'});
//         }
//         return rej(error);
//       });
//   });
// }

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };
    // console.log(requestOptions,'-------------he');

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    axios[method](BASE_URL + endPoint, method === 'get' || method === 'delete' ? { headers, params: data } : data, { headers })
      .then(result => {
        const { data } = result;

        if (data.status === false) {
          return rej(data);
        }
        return res(data);
      })
      .catch(error => {
        console.log(error);
        console.log(error && error.response, 'the error response');
        if (error && error.response && error.response.status === 401) {
          showError('User is not authorized');
          clearAsyncStorage();
          setTimeout(() => {
            RNRestart.restart();
          }, 1000);
          // NavigationService.resetNavigation();
          // NavigationService.navigate('loginUsingEmailScreen');
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({ message: 'Network Error', msg: 'Network Error' });
        }
        return rej(error);
      });
  });
}

// formdata Api


export async function makeApiFormDataRequest(endpoint, method, data = {}, hobbies, isPurpose, isImagePicked) {
  console.log('PAYLOAD-----------------', data, 'PAYLOAD')

  try {
    const token = await getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    const formData = new FormData();



    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach(item => {
          formData.append(`${key}[]`, item);
        });
      }


      if (isImagePicked == true) {
        if (key === 'image1' && data[key] && data[key].uri) {
          const response = await fetch(data[key].uri);
          const blob = await response.blob();
          const filename = data[key].uri.split('/').pop();
          const fileType = blob.type;

          formData.append('image1', {
            name: filename,
            type: fileType,
            uri: data[key].uri,
          });
        }
        else if (key === 'image2' && data[key] && data[key].uri) {
          const response = await fetch(data[key].uri);
          const blob = await response.blob();
          const filename = data[key].uri.split('/').pop();
          const fileType = blob.type;

          formData.append('image2', {
            name: filename,
            type: fileType,
            uri: data[key].uri,
          });
        }
        else if (key === 'image3' && data[key] && data[key].uri) {
          const response = await fetch(data[key].uri);
          const blob = await response.blob();
          const filename = data[key].uri.split('/').pop();
          const fileType = blob.type;

          formData.append('image3', {
            name: filename,
            type: fileType,
            uri: data[key].uri,
          });
        }
        else if (key === 'image4' && data[key] && data[key].uri) {
          const response = await fetch(data[key].uri);
          const blob = await response.blob();
          const filename = data[key].uri.split('/').pop();
          const fileType = blob.type;

          formData.append('image4', {
            name: filename,
            type: fileType,
            uri: data[key].uri,
          });
        }
        else if (key === 'image5' && data[key] && data[key].uri) {
          const response = await fetch(data[key].uri);
          const blob = await response.blob();
          const filename = data[key].uri.split('/').pop();
          const fileType = blob.type;

          formData.append('image5', {
            name: filename,
            type: fileType,
            uri: data[key].uri,
          });
        }
      }



      else {

        if (hobbies == true) {

          formData.append("hobbies", JSON.stringify(data));
        }
        if (isPurpose) {
          formData.append("purpose", JSON.stringify(data));
          // console.log(JSON.stringify(data));
        }
        else {
          formData.append(key, data[key]);
        }

      }
    }


    const requestOptions = {
      method: method,
      url: endpoint,
      headers: headers,
      data: formData,
    };

    console.log('Request Options:', JSON.stringify(requestOptions));

    const response = await axios(requestOptions);
    console.log('response OF API', response)
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('General error:', error.message);
    }
    console.error('Config error:', error.config);
    throw error;
  }
}




export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}

export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });
}

const api = axios.create({
    baseURL: BASE_URL,
});
export const apiCall = async (endpoint, method = "GET", data = null, headers = {}) => {
    try {
        //Check this is Form Data Or Not
        const isFormData = data instanceof FormData;
        const token = await getItem("token");
        console.log('__________________', token);
        
        const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await api({
            url: endpoint,
            method,
            data,
            headers: {
                ...headers, 
                ...(isFormData ? {authHeader} : { "Content-Type": "application/json", ...authHeader }),
            },
        });

        return response.data;
    } catch (error) {
        console.error("API Call Error:", error);
        throw error; 
    }
};

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorage() {
  return AsyncStorage.clear();
}

export function setUserData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('userData', data);
}

export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userData').then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export function setFirstTime(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('isFirstTime', data);
}

export async function getFirstTime() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('isFirstTime').then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export async function clearUserData() {
  return AsyncStorage.removeItem('userData');
}



export const getAllCourse = async(data)=>{
    return apiGet("yogaCourse");
}

export const getdaysCourse = async(data)=>{
  return apiGet("yogaCourse/courses/next-14-days");
}

export const getAllNotifications = async(data)=>{
  return apiGet("user/Notification/all");
}

export const getAllPackage = async(data)=>{
    return apiGet("api/packages");
}

export const getSinglePackage = async(id)=>{
    return apiGet(`api/packages/${id}`);
}

export const bookPackage  = async(data, headers)=>{
    return apiPost(`package-subscription`,  data );
}

export const getSelfBookiing  = async()=>{
  return apiGet(`booking/self/booking`);
}

export const getSelfBookingPackage  = async()=>{
  return apiGet(`package-subscription/user/self` );
}

export const bookClassByPackage   = async(data)=>{
  console.log('Post APi data:::', data);
  return apiPost(`booking/package-booking`,  data );
}

export const bookClassByPackages   = async(data, headers)=>{
    console.log(data,'))))))))))))))))))))))))))))))))');
    
    return apiCall(`booking/package-booking`, "POST", data, headers );
}

export const bookClass   = async(data)=>{
  return apiPost(`booking/direct`, data );
}

export const bookClassByWallet   = async(data, headers)=>{
  return apiPost(`booking/wallet-purchase`, data );
}

export const BookingCancel= async(id)=>{
  return apiPut(`booking/user-cancel/${id}` );
}

export const selfProfile  = async(data)=>{
  return apiGet(`user/self`,);
}

export const addToWaitlist   = async(data)=>{
  return apiPost(`booking/waitlist/add`,  data );
}

export const removeFromWaitlist   = async(data)=>{
  return apiPost(`booking/waitlist/remove`,  data );
}

export const isUserInWaitlist   = async(courseId, date)=>{
  return apiGet(`booking/waitlist/status?courseId=${courseId}&date=${date}`, );
}


export const creteDirectPayment   = async(data)=>{
  return apiPost(`payment/create-payment`,  data );
}

export const verifyPayment   = async(data)=>{
  return apiPost(`payment/payment-verify`,  data );
}


// 
export const createPackagePaymentOrder   = async(data)=>{
  return apiPost(`payment/package/create-payment`, data );
}
export const verifyPackagePaymentOrder   = async(data)=>{
  return apiPost(`payment/package/payment-verify`, data );
}

export const activePackageSubscription  = async()=>{
  return apiGet(`package-subscription/user/active` );
}


export const getSingleClass  = async(id)=>{
    return apiGet(`yogaCourse/${id}`,);
}


export const getCourseSlot  = async(courseId, date)=>{
    return apiGet(`booking/check/slot?courseId=${courseId}&date=${date}`,);
}

