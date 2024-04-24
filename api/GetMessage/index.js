module.exports = async function (context, req) {
  const date = "2024-04-24T08:13:27.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

