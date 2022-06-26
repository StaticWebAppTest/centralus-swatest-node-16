module.exports = async function (context, req) {
  const date = "2022-06-26T11:08:50.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

