module.exports = async function (context, req) {
  const date = "2023-07-12T23:09:17.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

