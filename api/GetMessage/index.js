module.exports = async function (context, req) {
  const date = "2023-08-20T03:08:38.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

