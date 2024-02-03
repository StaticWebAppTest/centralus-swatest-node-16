module.exports = async function (context, req) {
  const date = "2024-02-03T12:15:03.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

