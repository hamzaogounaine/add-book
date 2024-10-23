"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { toast } from "@/components/ui/use-toast"

export default function SimpleAddBook() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      console.log({ title, author })
    //   toast({
    //     title: "Book Added",
    //     description: `Added "${title}" by ${author}`,
    //   })
      setTitle("")
      setAuthor("")
    } else {
    //   toast({
    //     title: "Error",
    //     description: "Please fill in all fields",
    //     variant: "destructive",
    //   })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <Label htmlFor="title">Book Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          required
        />
      </div>
      <div>
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Add Book
      </Button>
    </form>
  )
}