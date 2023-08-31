module.exports = async function (context, req) {
  const date = "2023-08-31T20:09:07.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

