module.exports = async function (context, req) {
  const date = "2025-07-26T12:27:00.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

