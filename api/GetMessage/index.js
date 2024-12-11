module.exports = async function (context, req) {
  const date = "2024-12-11T14:12:20.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

