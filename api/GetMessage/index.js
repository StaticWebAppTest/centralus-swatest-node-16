module.exports = async function (context, req) {
  const date = "2025-01-21T09:12:21.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

