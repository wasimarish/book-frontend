import React, { useEffect, useState } from 'react';
import BooksCard from '../books/BooksCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const categories = ["Choose A Genre", "Business", "Horror", "Adventure"];

const TopSellers = () => {

    // const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("choose a genre");

    const {data: books = []} = useFetchAllBooksQuery();
    // console.log(books);

    // useEffect(() => {
    //     fetch("books.json")
    //         .then(res => res.json())
    //         .then((data) => setBooks(data));
    // }, []);

    const filteredBooks = selectedCategory === "choose a genre" ? books : books.filter(book =>
        book.category.toLowerCase() === selectedCategory.toLowerCase()
    );

    return (
        <div className='py-10'>
            <h2 className='text-3xl semi-bold mb-6'>Top Seller</h2>
            <div className='mb-8 flex items-center'>
                <select onChange={(e) => setSelectedCategory(e.target.value)} name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
            <div>
            <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper  "
      >
         {
                  filteredBooks.length>0 &&  filteredBooks.map((book, index) => (
                        <SwiperSlide key={index} >
                            <BooksCard  book={book}/>
                        </SwiperSlide>
                        
                    ))
                }

      </Swiper>

            
               
            </div>
        </div>
    );
}

export default TopSellers;
