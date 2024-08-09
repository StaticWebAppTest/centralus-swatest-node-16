module.exports = async function (context, req) {
  const date = "2024-08-09T21:09:41.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

