module.exports = async function (context, req) {
  const date = "2025-03-21T20:13:28.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

