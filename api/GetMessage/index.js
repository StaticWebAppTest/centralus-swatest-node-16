module.exports = async function (context, req) {
  const date = "2025-03-16T02:55:53.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

