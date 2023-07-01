module.exports = async function (context, req) {
  const date = "2023-07-01T07:08:16.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

