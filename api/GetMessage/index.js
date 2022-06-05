module.exports = async function (context, req) {
  const date = "2022-06-05T03:32:24.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

