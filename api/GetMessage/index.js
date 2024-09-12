module.exports = async function (context, req) {
  const date = "2024-09-12T11:09:33.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

