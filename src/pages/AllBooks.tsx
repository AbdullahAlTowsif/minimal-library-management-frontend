import LoadingSpinner from "@/components/module/LoadingSpinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBooksQuery } from "@/redux/libraryApi";
import type { IBook } from "@/type";
import { FaRegEdit } from "react-icons/fa";
import { Trash2 } from "lucide-react";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  console.log(data);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center my-3 text-4xl font-bold">All Books</h1>
      <Table>
        <TableCaption>A list of your Next Adventure</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading &&
            data.data.map((book: IBook) => (
              <TableRow key={book.isbn}>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>
                  {book.available ? "Available" : "Not Available"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-between items-center text-sm">
                    <Link to={`/edit-book/${book._id}`}> <FaRegEdit /> </Link>
                    <Button variant="link" className="p-0 text-red-500"> <Trash2></Trash2> </Button>
                    <Link to={'/borrow/:bookId'}> <IoBookSharp /> </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBooks;
