module.exports = async function (context, req) {
  const date = "2025-01-11T05:10:43.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

