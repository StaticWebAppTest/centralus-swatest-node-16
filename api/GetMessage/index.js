module.exports = async function (context, req) {
  const date = "2023-06-01T12:17:40.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

