import { useSelector } from 'react-redux';

const useUserData = () => {
  let userData = useSelector((state) => state?.user?.userData);

  if (userData && Object.keys(userData).length !== 0) {
    try {
      userData = JSON.parse(userData);
    } catch (error) {
      console.error('Failed to parse userData:', error);
    }
  }

  return userData;
};

export default useUserData;
