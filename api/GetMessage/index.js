module.exports = async function (context, req) {
  const date = "2024-03-22T00:41:04.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

