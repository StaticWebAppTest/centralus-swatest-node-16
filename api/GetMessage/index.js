module.exports = async function (context, req) {
  const date = "2025-04-20T15:11:24.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

