module.exports = async function (context, req) {
  const date = "2022-06-26T20:10:31.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

