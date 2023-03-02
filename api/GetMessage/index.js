module.exports = async function (context, req) {
  const date = "2023-03-02T22:08:34.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

