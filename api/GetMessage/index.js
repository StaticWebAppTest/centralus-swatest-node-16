module.exports = async function (context, req) {
  const date = "2024-10-03T12:22:17.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

