module.exports = async function (context, req) {
  const date = "2025-01-10T14:11:16.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

