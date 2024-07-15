module.exports = async function (context, req) {
  const date = "2024-07-15T03:13:31.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

