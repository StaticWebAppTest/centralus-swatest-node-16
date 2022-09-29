module.exports = async function (context, req) {
  const date = "2022-09-29T17:31:34.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

