module.exports = async function (context, req) {
  const date = "2025-12-05T12:29:23.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

