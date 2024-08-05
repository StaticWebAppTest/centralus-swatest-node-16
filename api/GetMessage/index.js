module.exports = async function (context, req) {
  const date = "2024-08-05T22:09:54.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

