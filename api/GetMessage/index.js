module.exports = async function (context, req) {
  const date = "2025-03-07T05:12:34.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

