module.exports = async function (context, req) {
  const date = "2024-04-20T02:16:59.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

