module.exports = async function (context, req) {
  const date = "2025-12-11T23:13:48.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

