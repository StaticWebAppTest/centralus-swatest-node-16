module.exports = async function (context, req) {
  const date = "2024-06-24T04:12:43.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

