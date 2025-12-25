module.exports = async function (context, req) {
  const date = "2025-12-25T18:21:00.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

