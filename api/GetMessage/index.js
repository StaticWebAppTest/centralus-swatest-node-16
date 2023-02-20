module.exports = async function (context, req) {
  const date = "2023-02-20T04:12:22.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

