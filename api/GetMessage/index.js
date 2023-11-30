module.exports = async function (context, req) {
  const date = "2023-11-30T22:08:38.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

