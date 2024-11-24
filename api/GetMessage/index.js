module.exports = async function (context, req) {
  const date = "2024-11-24T03:30:24.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

