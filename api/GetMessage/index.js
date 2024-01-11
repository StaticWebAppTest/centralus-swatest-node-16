module.exports = async function (context, req) {
  const date = "2024-01-11T20:09:59.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

