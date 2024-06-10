import mongoose, { Schema } from 'mongoose';

const annonceSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
});

const Annonce = mongoose.model('Annonce', annonceSchema);

export default Annonce;
