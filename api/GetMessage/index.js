module.exports = async function (context, req) {
  const date = "2025-05-05T06:20:00.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

