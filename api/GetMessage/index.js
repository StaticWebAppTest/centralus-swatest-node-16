module.exports = async function (context, req) {
  const date = "2025-01-08T02:15:31.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

