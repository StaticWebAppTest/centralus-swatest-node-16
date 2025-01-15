module.exports = async function (context, req) {
  const date = "2025-01-15T13:17:30.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

