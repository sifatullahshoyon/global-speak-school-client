// get all feature
export const getAllFeature = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/features`);
  const data = await response.json();
  return data;
};
