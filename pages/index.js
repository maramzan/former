import Head from "next/head";
import Image from "next/image";
import Categories from "../components/Categories";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

// MUI imports
import { Grid } from "@mui/material";
import Features from "../components/Features";
import Footer from "../components/Footer";

const data = [
  {
    title: "Pesticides",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Fertilizers",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Seeds",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Hybrid Seeds",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Spray Machinery",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Kitchen Gardening",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Tunnel Farming",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Live Stock",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Automation Irrigation",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Household Products",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Home Decore",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
  {
    title: "Agriculture Tools",
    image:
      "https://media.istockphoto.com/photos/manual-pesticide-sprayer-picture-id503140566?k=20&m=503140566&s=612x612&w=0&h=uivoSSc7bfmYJQasP_NM7P7qfWPFQvozR7oA_GYOdyg=",
    hoverImage:
      "https://c8.alamy.com/comp/GNE3HN/burkina-faso-bobo-dioulasso-market-booth-sale-of-pesticides-fertilizer-GNE3HN.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          width: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 2,
        }}
      >
        <Sidebar />
        <ImageCarousel />
      </Grid>
      <ProductSection
        sectionTitle="Flash Sale"
        products={data}
        bgColor={"#eadaeb"}
      />
      <Categories />
      <ProductSection
        sectionTitle="Seasonal Products"
        products={data}
        bgColor={"#d5d5ef"}
      />
      <Features />
      <Footer />
    </>
  );
}
