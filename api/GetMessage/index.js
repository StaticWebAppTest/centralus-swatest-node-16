module.exports = async function (context, req) {
  const date = "2023-01-20T06:12:41.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

