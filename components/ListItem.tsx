"use client"
import React from "react"
import Button from "./Button"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface ListItemProps {
  image: string
  name: string
  href: string
}

const ListItem: React.FC<ListItemProps> = ({ href, image, name }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(href)
  }
  return (
    <Button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          className="object-cover"
          fill
          src={image}
          alt="image"
        />
      </div>
      <p className="text-white">{name}</p>
    </Button>
  )
}

export default ListItem
