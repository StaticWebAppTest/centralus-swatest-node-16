module.exports = async function (context, req) {
  const date = "2025-12-09T13:30:58.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

