module.exports = async function (context, req) {
  const date = "2025-04-18T20:13:28.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

