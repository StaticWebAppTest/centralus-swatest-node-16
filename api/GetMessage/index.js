module.exports = async function (context, req) {
  const date = "2023-03-19T03:11:56.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

