interface Content {
  id: string;
  title: string;
  image: {
    url: string;
    height: number;
    width: number;
  }[];
  body: string;
  technology: string;
  link?: string;
}

interface Contents {
  contents: Content[];
}

export type { Content, Contents };
