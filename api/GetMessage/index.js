module.exports = async function (context, req) {
  const date = "2023-04-20T01:59:00.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

