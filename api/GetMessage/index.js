module.exports = async function (context, req) {
  const date = "2025-04-28T19:10:26.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

