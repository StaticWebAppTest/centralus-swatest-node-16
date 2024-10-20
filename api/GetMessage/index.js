module.exports = async function (context, req) {
  const date = "2024-10-20T09:11:35.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

