module.exports = async function (context, req) {
  const date = "2025-01-25T14:09:27.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

