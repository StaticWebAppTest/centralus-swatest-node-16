module.exports = async function (context, req) {
  const date = "2022-08-26T10:12:23.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

