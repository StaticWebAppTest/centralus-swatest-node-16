module.exports = async function (context, req) {
  const date = "2023-05-22T22:08:06.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

