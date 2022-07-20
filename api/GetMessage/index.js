module.exports = async function (context, req) {
  const date = "2022-07-20T08:15:15.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

