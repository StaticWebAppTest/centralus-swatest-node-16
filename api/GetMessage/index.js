module.exports = async function (context, req) {
  const date = "2023-07-20T12:18:05.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

