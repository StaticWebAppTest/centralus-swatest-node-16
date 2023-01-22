module.exports = async function (context, req) {
  const date = "2023-01-22T21:07:46.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

