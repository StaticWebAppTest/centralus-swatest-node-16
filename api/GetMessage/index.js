module.exports = async function (context, req) {
  const date = "2022-05-22T00:54:51.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

