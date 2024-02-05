module.exports = async function (context, req) {
  const date = "2024-02-05T07:09:46.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

