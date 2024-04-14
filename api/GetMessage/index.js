module.exports = async function (context, req) {
  const date = "2024-04-14T03:49:43.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

