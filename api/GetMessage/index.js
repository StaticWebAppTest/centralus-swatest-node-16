module.exports = async function (context, req) {
  const date = "2023-12-01T02:32:07.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

