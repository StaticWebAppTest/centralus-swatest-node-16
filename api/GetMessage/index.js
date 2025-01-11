module.exports = async function (context, req) {
  const date = "2025-01-11T08:13:59.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

