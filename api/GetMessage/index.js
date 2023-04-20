module.exports = async function (context, req) {
  const date = "2023-04-20T00:46:00.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

