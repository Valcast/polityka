type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  title: string;
  author: Ref;
  categories: CategoryRef[];
  slug: Slug;
  publishedAt: string;
  body: Block[];
  mainImage: Image;
}

interface CategoryRef {
  _ref: string;
  _key: string;
  _type: "reference";
}

interface Author extends Base {
  bio: Block[];
  name: string;
  slug: Slug;
  image: Image;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Image {
  _type: "image";
  asset: Ref;
  crop: Crop;
  hotspot: Hotspot;
  publishedAt: string;
}

interface Crop {
  _type: "sanity.imageCrop";
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface Hotspot {
  _type: "sanity.imageHotspot";
  height: number;
  width: number;
  x: number;
  y: number;
}

interface Ref {
  _ref: string;
  _type: string;
}

interface Block {
  _key: string;
  _type: string;
  children: Span[];
  markDefs: any[];
  style: h1 | h2 | h3 | h4 | h5 | h6 | blockquote | normal;
}

interface Span {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}
