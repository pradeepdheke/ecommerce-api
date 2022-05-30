import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    status: {
        type: String,
        default: "inactive"
    },
    
    fname : {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, "First name must be less than 20 characters"]
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, "Last name must be less than 20 characters"]
    },
    dob: {
        type: Date,
        default: null,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, "Email must be less than 50 characters"],
        unique: true,
        index: 1
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxLength: [15, "Phone must be less than 15 characters"],
        minLength: [15, "Phone must be at least 10 characters"],
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: 'n/a',
    }
    }, {
        timestamps: true
    })

    export default mongoose.model('Admin', AdminSchema)