import axios from 'axios';

export const fetchEmployees = async (companyId, authToken, setEmployeesList, setDataLoading) => {
  try {
    const response = await axios.get(
      `https://api-pp.hifivework.com/apiv1/company/${companyId}/employees`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    setEmployeesList(response.data);
    //setEmployees(response.data);
    setDataLoading(false);
  } catch (error) {
    console.error(error);
  }
};
