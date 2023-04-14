module.exports = async function (context, req) {
  const date = "2023-04-14T03:09:16.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

