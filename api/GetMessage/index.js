module.exports = async function (context, req) {
  const date = "2023-04-20T10:09:41.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

