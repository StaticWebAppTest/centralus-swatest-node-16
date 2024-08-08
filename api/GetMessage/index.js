module.exports = async function (context, req) {
  const date = "2024-08-08T00:51:03.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

