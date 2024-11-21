module.exports = async function (context, req) {
  const date = "2024-11-21T02:22:14.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

