module.exports = async function (context, req) {
  const date = "2024-09-09T03:14:24.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

