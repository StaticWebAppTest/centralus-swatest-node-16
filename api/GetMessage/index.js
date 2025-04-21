module.exports = async function (context, req) {
  const date = "2025-04-21T10:13:49.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

