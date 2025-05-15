module.exports = async function (context, req) {
  const date = "2025-05-15T19:10:32.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

