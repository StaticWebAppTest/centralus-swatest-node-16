module.exports = async function (context, req) {
  const date = "2023-04-30T20:08:37.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

