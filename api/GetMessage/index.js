module.exports = async function (context, req) {
  const date = "2023-07-31T22:08:18.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

