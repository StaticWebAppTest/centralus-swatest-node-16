module.exports = async function (context, req) {
  const date = "2024-07-01T20:11:03.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

