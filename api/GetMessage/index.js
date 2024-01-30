module.exports = async function (context, req) {
  const date = "2024-01-30T15:08:54.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

