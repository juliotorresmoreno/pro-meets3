import config from "../config";
import { Media } from "../models/Media";
import { Create } from "../rest";

export function createMedia(
  payload: Omit<Create<Media>, "size" | "filename" | "url" | "mimetype"> & {
    file: File;
  },
  onProgress?: (progress: number) => void
): Promise<Media> {
  const formData = new FormData();
  if (payload.organizationId) {
    formData.append("organizationId", payload.organizationId);
  }
  formData.append("file", payload.file);
  formData.append("alt", payload.alt || "");

  return new Promise<Media>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${config.apiUrl}/media`, true);
    xhr.withCredentials = true;

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && onProgress) {
        const progress = Math.round((event.loaded / event.total) * 100);
        onProgress(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      } else {
        reject(new Error(`Upload failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network error during upload"));
    };

    xhr.send(formData);
  });
}
