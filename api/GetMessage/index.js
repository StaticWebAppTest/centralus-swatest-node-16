module.exports = async function (context, req) {
  const date = "2025-01-24T11:10:12.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

