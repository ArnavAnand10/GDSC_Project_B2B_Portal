const mongoose = require("mongoose");

const analyticsSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        required: true,
    },
    totalsales:{
        type: Number,
        required: true,
    },
    averatgeorder:{
        type: Numbe
    },
    topproducts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TopProduct"
    }],
    creaetdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }

});

const Analytics = mongoose.model("Analytics", analyticsSchema);
module.exports = Analytics;