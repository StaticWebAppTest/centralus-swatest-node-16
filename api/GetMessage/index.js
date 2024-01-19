module.exports = async function (context, req) {
  const date = "2024-01-19T10:09:53.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

