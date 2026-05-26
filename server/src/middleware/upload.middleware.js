import multer from 'multer';


const storage = multer.memoryStorage();

const resumeFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed for resume upload.'), false);
  }
};


const audioFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('audio/')) {
    cb(null, true);
  } else {
    cb(new Error('Only audio files are allowed.'), false);
  }
};


export const uploadResume = multer({
  storage,
  fileFilter: resumeFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
}).single('resume');

export const uploadAudio = multer({
  storage,
  fileFilter: audioFilter,
  limits: { fileSize: 25 * 1024 * 1024 },
}).single('audio');
