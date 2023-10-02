module.exports = async function (context, req) {
  const date = "2023-10-02T02:16:51.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

