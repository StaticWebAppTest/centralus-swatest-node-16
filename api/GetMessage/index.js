module.exports = async function (context, req) {
  const date = "2022-04-01T14:10:29.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

