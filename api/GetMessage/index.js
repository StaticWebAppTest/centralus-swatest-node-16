module.exports = async function (context, req) {
  const date = "2025-04-14T13:24:32.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

