module.exports = async function (context, req) {
  const date = "2025-07-25T20:15:40.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

