"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

import { FaShopify } from "react-icons/fa";

export default function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        className={`h-[60px] bg-gradient-to-r from-white via-gray-100 to-slate-100 flex items-center justify-between p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-300 ${
          sticky ? "fixed top-0 left-0 w-full z-50" : "my-4 mx-4"
        }`}
        style={{
          height: sticky ? "100px" : "auto",
        }}>
        {/* title */}
        <div className="flex gap-4">
          <span className="text-2xl font-fun">
            <Logo />
          </span>
        </div>

        {/* button */}
        <div className="py-1 px-2 flex gap-8 items-center rounded-md">
          <Link
            className="duration-200 ease-in-out uppercase hover:text-secondary"
            href="/">
            Acceuil
          </Link>
          <Link
            className="duration-200 ease-in-out uppercase hover:text-secondary"
            href="/product">
            Nos produits
          </Link>
          <Link
            className="duration-200 ease-in-out uppercase hover:text-secondary"
            href="/service">
            Service
          </Link>
          <Link
            className="duration-200 ease-in-out uppercase hover:text-secondary"
            href="/contact">
            Contact
          </Link>
          <Link
            className="duration-200 ease-in-out uppercase hover:text-secondary"
            href="#">
            <FaShopify className="text-[30px]" />
          </Link>
          <Link href="#" onClick={() => setShowSearch(!showSearch)}>
            <CiSearch className="text-[30px]" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[75px] left-0 right-0 flex justify-center px-4 z-40 bg-gradiant mx-5 rounded-md p-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-[90%] max-w-md p-2 border border-gray-300 rounded shadow-lg"
              style={{ zIndex: 50 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
