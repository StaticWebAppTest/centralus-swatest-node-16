module.exports = async function (context, req) {
  const date = "2025-04-15T13:23:57.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

