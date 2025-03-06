module.exports = async function (context, req) {
  const date = "2025-03-06T20:13:22.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

