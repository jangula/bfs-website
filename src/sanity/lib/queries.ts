import { groq } from 'next-sanity'

export const getServices = groq`*[_type == "service"] | order(order asc)`

export const getFunds = groq`*[_type == "fund"] | order(order asc)`

export const getOpportunities = groq`*[_type == "opportunity" && active == true]`

export const getDocuments = groq`*[_type == "bfsDocument"] | order(publishedDate desc) { ..., "fileUrl": file.asset->url }`

export const getNewsPosts = groq`*[_type == "newsPost"] | order(publishedDate desc)`

export const getNewsPost = groq`*[_type == "newsPost" && slug.current == $slug][0]`

export const getCareers = groq`*[_type == "career"] | order(closingDate asc)`

export const getTeamMembers = groq`*[_type == "teamMember"] | order(order asc)`

export const getImpactStats = groq`*[_type == "impactStat"] | order(order asc)`

export const getSiteSettings = groq`*[_type == "siteSettings"][0]`
