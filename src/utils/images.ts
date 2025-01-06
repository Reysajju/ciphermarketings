// GitHub raw content URL for the images
const baseUrl = "https://raw.githubusercontent.com/Reysajju/SWA/main/img";

// Generate array of image URLs
export const rickshawImages = Array.from({ length: 29 }, (_, i) => 
  `${baseUrl}/swa-rickshaw%20(${i + 1}).jpeg`
);