module.exports = async function (context, req) {
  const date = "2025-04-08T15:13:57.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

