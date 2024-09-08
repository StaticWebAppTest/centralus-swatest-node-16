module.exports = async function (context, req) {
  const date = "2024-09-08T16:13:26.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

