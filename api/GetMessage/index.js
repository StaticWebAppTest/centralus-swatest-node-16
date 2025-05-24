module.exports = async function (context, req) {
  const date = "2025-05-24T12:23:26.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

