module.exports = async function (context, req) {
  const date = "2023-04-01T22:07:29.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

