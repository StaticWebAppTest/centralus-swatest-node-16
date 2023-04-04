module.exports = async function (context, req) {
  const date = "2023-04-04T22:08:00.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

