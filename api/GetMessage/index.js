module.exports = async function (context, req) {
  const date = "2024-12-01T01:11:25.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

