module.exports = async function (context, req) {
  const date = "2025-01-09T20:13:00.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

