module.exports = async function (context, req) {
  const date = "2024-04-19T08:12:17.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

