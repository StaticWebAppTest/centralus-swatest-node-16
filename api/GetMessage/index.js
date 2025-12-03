module.exports = async function (context, req) {
  const date = "2025-12-03T14:15:30.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

