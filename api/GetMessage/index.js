module.exports = async function (context, req) {
  const date = "2023-07-19T01:43:54.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

