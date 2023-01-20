module.exports = async function (context, req) {
  const date = "2023-01-20T02:16:58.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

