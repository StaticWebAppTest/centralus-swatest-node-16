module.exports = async function (context, req) {
  const date = "2024-12-30T20:12:30.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

