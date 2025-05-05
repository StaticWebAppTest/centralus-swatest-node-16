module.exports = async function (context, req) {
  const date = "2025-05-05T23:12:32.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

