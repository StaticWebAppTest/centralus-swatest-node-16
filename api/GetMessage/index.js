module.exports = async function (context, req) {
  const date = "2025-03-14T18:16:28.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

