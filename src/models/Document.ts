export interface Document {
  id: string;
  name: string;
  type: "folder" | "file";
  size?: string;
  modified: string;
  starred?: boolean;
  extension?: string;
}