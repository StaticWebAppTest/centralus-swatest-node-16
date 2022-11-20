module.exports = async function (context, req) {
  const date = "2022-11-20T12:18:41.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

