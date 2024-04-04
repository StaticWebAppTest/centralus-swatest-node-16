module.exports = async function (context, req) {
  const date = "2024-04-04T15:09:25.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

