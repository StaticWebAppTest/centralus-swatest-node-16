module.exports = async function (context, req) {
  const date = "2024-04-18T02:21:25.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

