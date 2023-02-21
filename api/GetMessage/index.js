module.exports = async function (context, req) {
  const date = "2023-02-21T23:10:04.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

