module.exports = async function (context, req) {
  const date = "2023-06-26T19:08:07.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

