export const truncateFileName = (fileName: string): string => {
  const maxLength = 30;
  if (fileName.length > maxLength) {
    return `${fileName.substring(0, maxLength)}...`;
  }
  return fileName;
};
