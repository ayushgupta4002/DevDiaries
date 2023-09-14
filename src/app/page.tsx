"use client";
import Image from "next/image";
import MainNav from "./Components/MainNav";
import { useEffect, useState } from "react";
import axios from "axios";
import TypingHeading from "./Components/TypingHeading";
import BlogCard from "./Components/BlogCard";
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { fetchHashnodeData } from "./hashnode";

 

export default function Home() {
  // const { loading, error, data } = useQuery(GET_USER_PUBLICATION);
  const [blogData, setBlogData] = useState<any>(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    const graphqlQuery = `
      query {
        user(username: "satyampsoni") {
          publication {
            posts {
              title
              brief
              coverImage
              type
              readTime
              slug
            }
          }
        }
      }
    `;

    fetchHashnodeData(graphqlQuery)
      .then((result) => {
        console.log(result);
        setBlogData(result.user.publication.posts);
      })
      .catch((error) => {
        // Handle errors here
      });
  }, []);




  return (
    <main className="flex min-h-screen min-w-screen bg-[#f2f2f2] flex-col ">
      <MainNav />
      {/* <MainBanner /> */}
      <div>
        {/* <div className="text-[#312E81]  tracking-wide font-bold font-sans drop-shadow-2xl shadow-black pl-[3vw]">
          <TypingHeading />
        </div> */}
      </div>
      <div className="flex flex-col mt-[6vh] text-center   xsms:text-xl  font-medium  tracking-wide  font-mono  text-3xl">
        - Diary of a Developer -
        <span className="text-lg text-slate-600">Its not just about Tech</span>
      </div>
      <div className="mt-[5vh] flex mx-5 flex-row justify-center flex-wrap">
        <div className="flex flex-row">
          <div className="justify-center ">
            {blogData && Array.isArray(blogData) ? (
              blogData.map((blog: any) => {
                return <BlogCard key={blog.cuid} blogs={blog} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
