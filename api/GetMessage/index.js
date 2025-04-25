module.exports = async function (context, req) {
  const date = "2025-04-25T22:12:27.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

