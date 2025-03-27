module.exports = async function (context, req) {
  const date = "2025-03-27T03:28:06.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

