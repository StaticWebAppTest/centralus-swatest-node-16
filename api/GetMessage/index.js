module.exports = async function (context, req) {
  const date = "2025-03-07T15:12:34.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

