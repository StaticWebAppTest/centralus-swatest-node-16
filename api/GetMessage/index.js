module.exports = async function (context, req) {
  const date = "2023-01-20T16:13:20.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

