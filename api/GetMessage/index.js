module.exports = async function (context, req) {
  const date = "2023-04-24T20:09:12.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

