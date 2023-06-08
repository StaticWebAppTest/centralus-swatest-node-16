module.exports = async function (context, req) {
  const date = "2023-06-08T17:08:35.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

