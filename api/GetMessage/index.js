module.exports = async function (context, req) {
  const date = "2025-04-04T05:13:01.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

