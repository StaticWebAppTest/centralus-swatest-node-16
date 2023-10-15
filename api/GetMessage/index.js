module.exports = async function (context, req) {
  const date = "2023-10-15T23:08:00.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

