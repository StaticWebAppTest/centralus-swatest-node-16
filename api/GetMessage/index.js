module.exports = async function (context, req) {
  const date = "2024-04-10T00:41:55.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

