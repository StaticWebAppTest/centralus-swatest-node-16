module.exports = async function (context, req) {
  const date = "2024-10-22T13:21:01.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

