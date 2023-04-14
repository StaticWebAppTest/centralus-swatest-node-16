module.exports = async function (context, req) {
  const date = "2023-04-14T01:57:35.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

