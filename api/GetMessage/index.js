module.exports = async function (context, req) {
  const date = "2022-03-19T22:09:17.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

