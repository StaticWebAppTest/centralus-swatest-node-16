module.exports = async function (context, req) {
  const date = "2025-05-18T20:14:02.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

