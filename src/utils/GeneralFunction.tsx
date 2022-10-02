export const TabTitle = (newTitle: string): string => {
  return (document.title = newTitle);
};

export const TabIcon = (img:string): any => {
    let favicon = document.getElementById("favicon")
    favicon?.setAttribute("href", img)
  };
  
  