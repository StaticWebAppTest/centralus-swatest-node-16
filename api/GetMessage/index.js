module.exports = async function (context, req) {
  const date = "2025-12-23T12:30:39.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

