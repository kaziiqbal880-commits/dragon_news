
export const getCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data.data

}
export const getNewsByCategoryId = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    return data.data
}

export const getNewsDetailsById = async (category_Id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${category_Id}`)
    const data = await res.json()
    console.log(data.data)
    return data.data[0]

}