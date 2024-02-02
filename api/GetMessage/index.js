module.exports = async function (context, req) {
  const date = "2024-02-02T07:08:14.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

