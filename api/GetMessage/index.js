module.exports = async function (context, req) {
  const date = "2025-04-02T02:56:50.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

