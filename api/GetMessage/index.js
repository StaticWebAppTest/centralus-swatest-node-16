module.exports = async function (context, req) {
  const date = "2024-08-13T03:12:22.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

