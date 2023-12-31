module.exports = async function (context, req) {
  const date = "2023-12-31T16:10:27.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

