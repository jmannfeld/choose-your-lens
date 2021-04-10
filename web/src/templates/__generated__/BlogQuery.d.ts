/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogQuery
// ====================================================

export interface BlogQuery_allSanityPost_edges_node_slug {
  current: string | null;
}

export interface BlogQuery_allSanityPost_edges_node_authors_author_image_asset {
  url: string | null;
}

export interface BlogQuery_allSanityPost_edges_node_authors_author_image {
  asset: BlogQuery_allSanityPost_edges_node_authors_author_image_asset | null;
}

export interface BlogQuery_allSanityPost_edges_node_authors_author {
  name: string | null;
  image: BlogQuery_allSanityPost_edges_node_authors_author_image | null;
}

export interface BlogQuery_allSanityPost_edges_node_authors {
  author: BlogQuery_allSanityPost_edges_node_authors_author | null;
}

export interface BlogQuery_allSanityPost_edges_node_body_children {
  text: string | null;
}

export interface BlogQuery_allSanityPost_edges_node_body {
  children: (BlogQuery_allSanityPost_edges_node_body_children | null)[] | null;
}

export interface BlogQuery_allSanityPost_edges_node_bannerImage_asset_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string;
}

export interface BlogQuery_allSanityPost_edges_node_bannerImage_asset {
  fluid: BlogQuery_allSanityPost_edges_node_bannerImage_asset_fluid | null;
}

export interface BlogQuery_allSanityPost_edges_node_bannerImage {
  asset: BlogQuery_allSanityPost_edges_node_bannerImage_asset | null;
}

export interface BlogQuery_allSanityPost_edges_node {
  id: string;
  title: string | null;
  slug: BlogQuery_allSanityPost_edges_node_slug | null;
  description: string | null;
  authors: (BlogQuery_allSanityPost_edges_node_authors | null)[] | null;
  publishedAt: any | null;
  body: (BlogQuery_allSanityPost_edges_node_body | null)[] | null;
  bannerImage: BlogQuery_allSanityPost_edges_node_bannerImage | null;
}

export interface BlogQuery_allSanityPost_edges {
  node: BlogQuery_allSanityPost_edges_node;
}

export interface BlogQuery_allSanityPost {
  edges: BlogQuery_allSanityPost_edges[];
}

export interface BlogQuery {
  allSanityPost: BlogQuery_allSanityPost;
}

export interface BlogQueryVariables {
  slug: string;
}
