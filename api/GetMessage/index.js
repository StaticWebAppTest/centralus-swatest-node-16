module.exports = async function (context, req) {
  const date = "2024-04-16T03:11:14.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

