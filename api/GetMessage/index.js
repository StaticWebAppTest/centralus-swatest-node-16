module.exports = async function (context, req) {
  const date = "2023-11-07T04:10:41.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

