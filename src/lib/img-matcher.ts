import { StaticImageData } from 'next/image'
import { FEImg, BEImg, JSImg, TailwindImg, ReactImg } from '../assets'

interface ImgMap {
  [key: string]: StaticImageData
}

const imgMap: ImgMap = {
  frontend: FEImg,
  backend: BEImg,
  javascript: JSImg,
  tailwindcss: TailwindImg,
  reactjs: ReactImg,
}

export const getImg = (name: string): string => {
  return imgMap[name].src
}
