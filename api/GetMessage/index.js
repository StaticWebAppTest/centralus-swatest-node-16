module.exports = async function (context, req) {
  const date = "2024-12-13T14:11:59.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

