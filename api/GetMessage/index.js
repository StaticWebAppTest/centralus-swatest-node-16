module.exports = async function (context, req) {
  const date = "2025-03-07T03:22:31.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

