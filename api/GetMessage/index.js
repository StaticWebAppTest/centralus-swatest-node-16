module.exports = async function (context, req) {
  const date = "2024-06-20T20:10:35.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

