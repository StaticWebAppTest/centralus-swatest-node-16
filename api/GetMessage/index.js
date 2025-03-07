module.exports = async function (context, req) {
  const date = "2025-03-07T09:12:56.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

