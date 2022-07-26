module.exports = async function (context, req) {
  const date = "2022-07-26T01:02:41.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

