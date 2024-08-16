module.exports = async function (context, req) {
  const date = "2024-08-16T20:11:56.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

