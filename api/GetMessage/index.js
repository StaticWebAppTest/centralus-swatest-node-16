module.exports = async function (context, req) {
  const date = "2025-01-24T08:15:31.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

