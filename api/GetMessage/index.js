module.exports = async function (context, req) {
  const date = "2025-06-25T20:15:36.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

