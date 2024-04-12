module.exports = async function (context, req) {
  const date = "2024-04-12T18:09:56.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

