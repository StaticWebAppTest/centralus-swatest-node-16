module.exports = async function (context, req) {
  const date = "2025-04-25T13:22:53.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

