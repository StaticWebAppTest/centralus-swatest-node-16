module.exports = async function (context, req) {
  const date = "2025-01-21T13:17:56.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

