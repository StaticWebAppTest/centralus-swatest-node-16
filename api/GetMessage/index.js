module.exports = async function (context, req) {
  const date = "2024-06-14T13:12:22.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

