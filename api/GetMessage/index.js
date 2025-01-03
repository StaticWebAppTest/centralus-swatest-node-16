module.exports = async function (context, req) {
  const date = "2025-01-03T11:09:30.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

