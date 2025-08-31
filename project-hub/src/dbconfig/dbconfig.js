import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    const conection = mongoose.connection;
    conection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    conection.once('open', () => {
      console.log('MongoDB connection established');
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  };
};

export default connectDB;