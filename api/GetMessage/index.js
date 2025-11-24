module.exports = async function (context, req) {
  const date = "2025-11-24T12:29:02.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

