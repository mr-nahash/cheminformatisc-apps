import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ToolCard from "@/components/AppListing/ToolCard";


export default async function HomePage() {
  
  return (
    <div>
      <ToolCard></ToolCard>
    </div>
          
  );
}