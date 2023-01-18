module.exports = async function (context, req) {
  const date = "2023-01-18T03:11:28.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

