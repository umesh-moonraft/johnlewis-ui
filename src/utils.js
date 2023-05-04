export const generateIdByName = (name) => {
  
  return name.replace(/\s+|[,\/]/g, "-").toLowerCase();
};
