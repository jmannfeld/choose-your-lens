/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogListQuery
// ====================================================

export interface BlogListQuery_allSanityPost_edges_node_slug {
  current: string | null;
}

export interface BlogListQuery_allSanityPost_edges_node_tileImage_asset_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string;
}

export interface BlogListQuery_allSanityPost_edges_node_tileImage_asset {
  fluid: BlogListQuery_allSanityPost_edges_node_tileImage_asset_fluid | null;
}

export interface BlogListQuery_allSanityPost_edges_node_tileImage {
  asset: BlogListQuery_allSanityPost_edges_node_tileImage_asset | null;
}

export interface BlogListQuery_allSanityPost_edges_node_bannerImage_asset_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string;
}

export interface BlogListQuery_allSanityPost_edges_node_bannerImage_asset {
  fluid: BlogListQuery_allSanityPost_edges_node_bannerImage_asset_fluid | null;
}

export interface BlogListQuery_allSanityPost_edges_node_bannerImage {
  asset: BlogListQuery_allSanityPost_edges_node_bannerImage_asset | null;
}

export interface BlogListQuery_allSanityPost_edges_node_body_children {
  text: string | null;
}

export interface BlogListQuery_allSanityPost_edges_node_body {
  children: (BlogListQuery_allSanityPost_edges_node_body_children | null)[] | null;
}

export interface BlogListQuery_allSanityPost_edges_node {
  id: string;
  title: string | null;
  description: string | null;
  slug: BlogListQuery_allSanityPost_edges_node_slug | null;
  tileImage: BlogListQuery_allSanityPost_edges_node_tileImage | null;
  bannerImage: BlogListQuery_allSanityPost_edges_node_bannerImage | null;
  publishedAt: any | null;
  body: (BlogListQuery_allSanityPost_edges_node_body | null)[] | null;
}

export interface BlogListQuery_allSanityPost_edges {
  node: BlogListQuery_allSanityPost_edges_node;
}

export interface BlogListQuery_allSanityPost {
  edges: BlogListQuery_allSanityPost_edges[];
}

export interface BlogListQuery {
  allSanityPost: BlogListQuery_allSanityPost;
}
