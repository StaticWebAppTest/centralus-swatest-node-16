module.exports = async function (context, req) {
  const date = "2024-01-30T20:08:55.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

