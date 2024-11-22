module.exports = async function (context, req) {
  const date = "2024-11-22T14:11:26.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

