module.exports = async function (context, req) {
  const date = "2025-06-15T09:13:29.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

