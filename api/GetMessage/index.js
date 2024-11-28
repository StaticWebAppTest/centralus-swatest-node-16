module.exports = async function (context, req) {
  const date = "2024-11-28T03:29:14.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

