module.exports = async function (context, req) {
  const date = "2025-03-19T08:16:27.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

