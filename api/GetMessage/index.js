module.exports = async function (context, req) {
  const date = "2024-10-02T12:22:39.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

