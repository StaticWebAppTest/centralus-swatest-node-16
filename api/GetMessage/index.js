module.exports = async function (context, req) {
  const date = "2025-04-05T18:15:23.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

