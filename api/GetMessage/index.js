module.exports = async function (context, req) {
  const date = "2025-04-15T19:10:23.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

