import { createClient, FieldsType } from "contentful";

interface ResponseEntry {
  sys: { id: string };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blog",
    });

    const blogs = response.items.map((blog: ResponseEntry) => {
      return {
        entryId: blog.sys.id,
        title: blog.fields.title,
        description: blog.fields.description,
        thumbnail: "https:" + blog.fields.thumbnail.fields.file?.url,
        author: blog.fields.author,
        category: blog.fields.category,
        createdAt: blog.fields.createdAt,
        content: blog.fields.content,
      };
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
};
