module.exports = async function (context, req) {
  const date = "2025-04-28T14:13:49.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

