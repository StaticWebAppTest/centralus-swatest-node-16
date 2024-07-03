module.exports = async function (context, req) {
  const date = "2024-07-03T03:11:26.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

