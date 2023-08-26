module.exports = async function (context, req) {
  const date = "2023-08-26T04:09:41.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

