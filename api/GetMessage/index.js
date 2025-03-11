module.exports = async function (context, req) {
  const date = "2025-03-11T06:17:49.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

