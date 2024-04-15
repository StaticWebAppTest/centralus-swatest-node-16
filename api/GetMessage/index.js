module.exports = async function (context, req) {
  const date = "2024-04-15T10:08:54.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

