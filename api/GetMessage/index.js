module.exports = async function (context, req) {
  const date = "2025-05-25T06:17:33.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

