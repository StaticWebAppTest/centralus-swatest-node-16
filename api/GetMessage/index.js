module.exports = async function (context, req) {
  const date = "2024-08-02T00:50:24.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

