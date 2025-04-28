module.exports = async function (context, req) {
  const date = "2025-04-28T12:25:55.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

