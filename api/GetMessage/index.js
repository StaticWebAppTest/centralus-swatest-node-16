module.exports = async function (context, req) {
  const date = "2023-09-17T03:08:41.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

