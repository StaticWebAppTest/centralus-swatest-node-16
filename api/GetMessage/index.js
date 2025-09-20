module.exports = async function (context, req) {
  const date = "2025-09-20T11:09:29.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

