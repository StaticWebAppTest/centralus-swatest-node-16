module.exports = async function (context, req) {
  const date = "2024-07-14T14:12:39.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

