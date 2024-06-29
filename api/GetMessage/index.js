module.exports = async function (context, req) {
  const date = "2024-06-29T11:09:30.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

