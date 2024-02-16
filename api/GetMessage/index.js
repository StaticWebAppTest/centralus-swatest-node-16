module.exports = async function (context, req) {
  const date = "2024-02-16T19:08:53.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

