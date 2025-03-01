module.exports = async function (context, req) {
  const date = "2025-03-01T09:11:31.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

