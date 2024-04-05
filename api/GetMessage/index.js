module.exports = async function (context, req) {
  const date = "2024-04-05T02:16:45.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

