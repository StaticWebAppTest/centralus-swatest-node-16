module.exports = async function (context, req) {
  const date = "2025-05-25T12:23:27.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

