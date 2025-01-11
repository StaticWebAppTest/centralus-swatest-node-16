module.exports = async function (context, req) {
  const date = "2025-01-11T04:14:00.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

