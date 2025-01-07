module.exports = async function (context, req) {
  const date = "2025-01-07T13:20:00.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

