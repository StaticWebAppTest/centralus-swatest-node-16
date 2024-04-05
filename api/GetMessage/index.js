module.exports = async function (context, req) {
  const date = "2024-04-05T04:13:38.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

