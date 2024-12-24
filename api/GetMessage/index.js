module.exports = async function (context, req) {
  const date = "2024-12-24T00:57:03.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

