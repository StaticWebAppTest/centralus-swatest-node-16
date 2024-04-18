module.exports = async function (context, req) {
  const date = "2024-04-18T21:08:34.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

