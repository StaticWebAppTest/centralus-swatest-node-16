module.exports = async function (context, req) {
  const date = "2023-02-22T16:13:34.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

