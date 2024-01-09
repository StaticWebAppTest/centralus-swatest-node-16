module.exports = async function (context, req) {
  const date = "2024-01-09T08:12:26.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

