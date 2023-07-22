module.exports = async function (context, req) {
  const date = "2023-07-22T16:10:02.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

