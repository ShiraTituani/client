export type Tag =
 | 'tech'
 | 'non-fiction'
 | 'fiction'
 | 'fantasy'
 | 'history'
 | 'self-help'
 | 'science';

 export type TagOption = {
  value: Tag;
  label: string;
};
export interface Book {
 id: string;
 title: string;
 author: string;
 year: number;
 rating: number; // 0–5
 tags: Tag[];
 description: string;

}
 export interface RatingOption {
 value: number,
     label: number
}
export type PostProps = {
  title: string;
 _id?: string; 
  content: string;
  tag: string;

};
export type UserProps = {
  username: string;
  email: string;
  isAdmin?: boolean;
  id?: string;
  password: string;
};
 export type LoginUser = {
  email: string;
  password: string;
}