module.exports = async function (context, req) {
  const date = "2025-01-18T07:09:49.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

