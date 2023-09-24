module.exports = async function (context, req) {
  const date = "2023-09-24T20:08:29.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

