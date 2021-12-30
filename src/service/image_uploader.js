class ImageUploader {
  async upload(file) {
    const cloudAccout = process.env.REACT_APP_CLOUD_ACCOUNT 
    const url = `https://api.cloudinary.com/v1_1/${cloudAccout}/image/upload`
    const formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", "ml_default");

    const result = await fetch(url, {
      method: "POST",
      body: formData,
    })

    return await result.json()
  }   
}

export default ImageUploader