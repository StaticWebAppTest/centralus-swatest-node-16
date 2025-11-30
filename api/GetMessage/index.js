module.exports = async function (context, req) {
  const date = "2025-11-30T23:12:22.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

