module.exports = async function (context, req) {
  const date = "2025-05-13T20:14:57.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

