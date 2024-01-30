module.exports = async function (context, req) {
  const date = "2024-01-30T21:08:47.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

