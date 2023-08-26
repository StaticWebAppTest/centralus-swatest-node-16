module.exports = async function (context, req) {
  const date = "2023-08-26T17:06:44.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

