module.exports = async function (context, req) {
  const date = "2024-02-20T20:10:22.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

