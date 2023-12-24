'use client'

import { Logout } from "@/services";
import { Button } from "@mui/material";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if (!localStorage.getItem('email')) {
      redirect('/login');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className='text-5xl font-bold'>Welcome to the Website, {localStorage?.getItem('name')} !!!</h1>

      <Button variant="outlined" style={{marginTop: '20px'}} onClick={() => {Logout()}}>
        Logout
      </Button>
    </main>
  );
}
