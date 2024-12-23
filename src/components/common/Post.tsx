"use client";
import { Privacy } from "@/api/baseApiResponseModel/baseApiResponseModel";
import { PostResponseModel } from "@/api/features/post/models/PostResponseModel";
import { useAuth } from "@/context/auth/useAuth";
import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Menu,
  MenuProps,
  Modal,
  Popover,
  Row,
  Tooltip,
} from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FaGlobe,
  FaHeart,
  FaLock,
  FaRegComments,
  FaRegHeart,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { getTimeDiff } from "@/utils/helper/DateTransfer";
import { RiAdvertisementLine } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import MediaView from "./MediaView";
import useColor from "@/global/hooks/useColor";


interface IPost {
  post?: PostResponseModel;
  isParentPost?: boolean;
  noFooter?: boolean;
  children?: React.ReactNode;
}

const Post: React.FC<IPost> = React.memo(
  ({ post, isParentPost = false, noFooter = false, children }) => {
    const router = useRouter();
    const { brandPrimary, brandPrimaryTap, lightGray, backgroundColor } =
      useColor();
    const { user } = useAuth();

    const renderPrivacyIcon = () => {
      switch (post?.privacy) {
        case Privacy.PUBLIC:
          return <FaGlobe size={12} color={brandPrimaryTap} />;
        case Privacy.FRIEND_ONLY:
          return <BsFillPeopleFill size={12} color={brandPrimaryTap} />;
        case Privacy.PRIVATE:
          return <FaLock size={12} color={brandPrimaryTap} />;
        default:
          return null;
      }
    };

    return (
      <Card
        style={{
          margin: 10,
          borderColor: isParentPost ? brandPrimary : "black",
          maxWidth: 600,
          width: "100%",
        }}
        title={
          <Row gutter={[8, 8]} className="m-2"
          >
            <Col
              xs={4}
              md={2}
              className="hover:cursor-pointer"
              onClick={() => router.push(`/user/${post?.user?.id}`)}
            >
              <Avatar src={post?.user?.avatar_url} shape="circle" />
            </Col>
            <Col xs={18} md={21}>
              <Row>
                <Col
                  span={24}
                  className="hover:cursor-pointer hover:underline"
                  onClick={() => router.push(`/user/${post?.user?.id}`)}
                >
                  <span style={{ fontWeight: "bold", fontSize: 14 }}>
                    {post?.user?.family_name} {post?.user?.name}
                  </span>
                </Col>
                <Col span={24}>
                  {post?.is_advertisement ? (
                    <div className="flex flex-row items-center">
                      <span
                        style={{
                          color: brandPrimaryTap,
                          fontSize: 12,
                          opacity: 0.5,
                          marginRight: 10,
                        }}
                      >
                        {"Được tài trợ"}
                      </span>
                      <RiAdvertisementLine size={24} color={brandPrimaryTap} />
                    </div>
                  ) : (
                    <div className="flex flex-row items-center">
                      <span
                        style={{
                          color: brandPrimaryTap,
                          fontSize: 12,
                          opacity: 0.5,
                          marginRight: 10,
                        }}
                      >
                        {getTimeDiff(post?.created_at)}
                      </span>
                      {renderPrivacyIcon()}
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        }
      >
        <Row gutter={[8, 8]} className="mx-2">
          {!isParentPost && children ? (
            <Col span={24}>
              {post?.content && (
                <span className="pl-2">{post?.content}</span>
              )}
              {children}
            </Col>
          ) : post?.content && post?.parent_id ? (
            <div>
              <div style={{ paddingLeft: 10 }}>
                <span>{post?.content}</span>
              </div>
              <div style={{ paddingLeft: 5, paddingRight: 5 }}>
                <div
                  style={{
                    padding: 10,
                    borderColor: "#000",
                    borderWidth: 1,
                    borderRadius: 5,
                  }}
                >
                  <span
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    {"Không có nội dung"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <Col span={22}>
              {post?.content && (
                <span className="pl-2">{post?.content}</span>
              )}
              {post?.media && post?.media?.length > 0 && (
                <MediaView mediaItems={post?.media} />
              )}
            </Col>
          )}
        </Row>
      </Card>
    );
  }
);

export default Post;
