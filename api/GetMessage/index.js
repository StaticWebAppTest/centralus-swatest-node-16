module.exports = async function (context, req) {
  const date = "2024-04-30T17:08:29.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

