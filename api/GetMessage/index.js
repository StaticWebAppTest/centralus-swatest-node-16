module.exports = async function (context, req) {
  const date = "2025-02-26T11:10:56.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

