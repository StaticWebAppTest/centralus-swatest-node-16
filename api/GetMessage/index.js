module.exports = async function (context, req) {
  const date = "2024-01-06T10:08:45.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

