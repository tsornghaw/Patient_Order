module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Id: String,
      Name: String,
      OrderId: String,
      Message: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
