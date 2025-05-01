module.exports = async function (context, req) {
  const date = "2025-05-01T16:16:18.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

