module.exports = async function (context, req) {
  const date = "2023-02-18T22:08:39.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

