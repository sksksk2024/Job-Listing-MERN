import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    logo: {
      type: String, // This will store the file path or URL to the image
      required: false, // File uploads can be optional
    },
    new: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      required: true,
    },
    role: {
      type: [String], // Array to support multiple roles
      required: true,
    },
    level: {
      type: String,
      required: false,
    },
    postedAt: {
      type: String,
      required: true,
      default: () => new Date().toISOString(), // Default to current date
    },
    contract: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    tools: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

export default Job;
