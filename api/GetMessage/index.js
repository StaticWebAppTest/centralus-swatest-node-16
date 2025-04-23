module.exports = async function (context, req) {
  const date = "2025-04-23T18:18:29.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

