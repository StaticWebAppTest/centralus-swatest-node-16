module.exports = async function (context, req) {
  const date = "2025-02-24T13:20:22.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

