module.exports = async function (context, req) {
  const date = "2025-03-16T13:17:17.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

