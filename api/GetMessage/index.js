module.exports = async function (context, req) {
  const date = "2025-05-31T15:11:58.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

