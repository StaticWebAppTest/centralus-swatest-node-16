module.exports = async function (context, req) {
  const date = "2024-01-20T16:11:05.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

