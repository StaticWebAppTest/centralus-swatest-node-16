module.exports = async function (context, req) {
  const date = "2024-09-11T03:11:56.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

