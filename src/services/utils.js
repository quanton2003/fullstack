export const isJsonString = (data) => {
    try{
    JSON.parse(data)
    }catch(error){
        return false
    }
    return true
}

export const getBase64 = (file) => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

    export const getItem = (label, key, icon, children,type) => ({
        key,
        icon,
        children,
        label,
        type
      });
      