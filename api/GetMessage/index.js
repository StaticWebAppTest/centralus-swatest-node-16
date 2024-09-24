module.exports = async function (context, req) {
  const date = "2024-09-24T08:16:03.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

