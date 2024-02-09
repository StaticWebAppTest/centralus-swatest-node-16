module.exports = async function (context, req) {
  const date = "2024-02-09T12:15:39.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

