import { diskStorage } from 'multer';
import { extname } from 'path';

export const storageConfig = (folder: string) =>
  diskStorage({
    destination: `uploads/${folder}`,
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });

export const fileFilter = (req, file, cb) => {
  const ext = extname(file.originalname);
  const allowExtArr = ['.jpg', '.png', '.jpeg'];
  if (!allowExtArr.includes(ext)) {
    req.fileValidationErr = 'wrong extension type';
    cb(null, false);
  } else {
    const fileSize = parseInt(req.headers['content-length']);
    if (fileSize > 1024 * 1024 * 5) {
      req.fileValidationErr = 'file size is too large';
      cb(null, false);
    } else {
      cb(null, true);
    }
  }
};

export const compareArrays = (a: Array<string>, b: Array<string>) => {
  if (a.sort().length !== b.sort().length) return false;
  else {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};
