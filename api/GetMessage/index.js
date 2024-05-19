module.exports = async function (context, req) {
  const date = "2024-05-19T22:11:27.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

