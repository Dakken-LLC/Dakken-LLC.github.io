declare module "./meta.json" {
  type JSONType = {
    title: string;
    description: string;
    icon: string;
    author: {
      name: string;
      avatar: string;
    }[];
    tags: string[];
    publishedData: string;
    editedData: string;
    slug: string;
  };
  const value: JSONType[];
  export default value;
}
