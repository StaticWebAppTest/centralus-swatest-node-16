module.exports = async function (context, req) {
  const date = "2025-04-10T10:14:24.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

