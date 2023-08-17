module.exports = async function (context, req) {
  const date = "2023-08-17T22:07:41.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

