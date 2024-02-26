module.exports = async function (context, req) {
  const date = "2024-02-26T12:16:02.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

