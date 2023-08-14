module.exports = async function (context, req) {
  const date = "2023-08-14T19:06:44.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

