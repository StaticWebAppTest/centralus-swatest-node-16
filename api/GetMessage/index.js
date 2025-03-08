module.exports = async function (context, req) {
  const date = "2025-03-08T02:24:49.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

