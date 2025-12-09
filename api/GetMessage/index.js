module.exports = async function (context, req) {
  const date = "2025-12-09T12:30:20.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

