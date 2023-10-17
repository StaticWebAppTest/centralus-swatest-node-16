module.exports = async function (context, req) {
  const date = "2023-10-17T17:08:00.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

