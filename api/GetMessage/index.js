module.exports = async function (context, req) {
  const date = "2024-08-17T07:08:58.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

