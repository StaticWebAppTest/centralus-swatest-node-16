module.exports = async function (context, req) {
  const date = "2025-11-11T10:15:43.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

