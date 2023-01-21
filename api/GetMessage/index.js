module.exports = async function (context, req) {
  const date = "2023-01-21T10:08:58.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

