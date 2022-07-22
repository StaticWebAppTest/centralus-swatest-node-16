module.exports = async function (context, req) {
  const date = "2022-07-22T03:43:35.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

