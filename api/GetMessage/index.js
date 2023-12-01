module.exports = async function (context, req) {
  const date = "2023-12-01T20:09:59.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

