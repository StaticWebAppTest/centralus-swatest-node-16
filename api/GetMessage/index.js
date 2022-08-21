module.exports = async function (context, req) {
  const date = "2022-08-21T04:26:41.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

