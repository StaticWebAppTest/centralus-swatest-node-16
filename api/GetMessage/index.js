module.exports = async function (context, req) {
  const date = "2024-01-13T16:10:38.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

