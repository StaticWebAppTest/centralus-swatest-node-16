module.exports = async function (context, req) {
  const date = "2024-04-06T03:10:24.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

