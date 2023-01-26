module.exports = async function (context, req) {
  const date = "2023-01-26T08:12:21.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

