module.exports = async function (context, req) {
  const date = "2023-08-22T15:08:41.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

