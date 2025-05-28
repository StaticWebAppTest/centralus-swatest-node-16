module.exports = async function (context, req) {
  const date = "2025-05-28T21:12:22.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

