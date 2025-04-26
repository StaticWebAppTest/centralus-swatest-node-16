module.exports = async function (context, req) {
  const date = "2025-04-26T07:11:28.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

