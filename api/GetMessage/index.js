module.exports = async function (context, req) {
  const date = "2024-05-18T21:08:15.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

