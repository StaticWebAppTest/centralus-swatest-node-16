module.exports = async function (context, req) {
  const date = "2024-09-12T20:12:26.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

