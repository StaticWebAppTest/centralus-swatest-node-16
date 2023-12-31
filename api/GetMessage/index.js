module.exports = async function (context, req) {
  const date = "2023-12-31T20:08:59.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

