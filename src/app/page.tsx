"use client";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/context/auth/useAuth";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const { isAuthenticated, checkingLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!checkingLoading)
      if (!isAuthenticated) router.push("/login");
  }, [isAuthenticated, checkingLoading]);

  return (
    <>
      {isAuthenticated && !checkingLoading ? (
        <MainLayout>
          <div>
            Hello
          </div>
        </MainLayout>
      ) : (
        <Spin tip="Loading" size="large" fullscreen>
          Loading...
        </Spin>
      )}
    </>
  );
}

export default HomePage
