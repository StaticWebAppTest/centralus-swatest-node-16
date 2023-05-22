module.exports = async function (context, req) {
  const date = "2023-05-22T23:08:41.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

